import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { PageServerLoad, Actions } from './$types';
import { BASE_URL } from '$env/static/private';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	email: z.string().email('Введите валидный email'),
	password: z.string().min(4, 'Пароль должен быть длиннее 4 символов')
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);
		if (!form.valid) {
			return fail(400, { form });
		}
		const response = await fetch( `${BASE_URL}auth/login/`, {

			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form.data)
		});
		if (!response.ok) {
			const badRes = await response.text();
			return message(form, badRes);
		}
		const data = await response.json();
		cookies.set('accessToken', data.accessToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30
		});
		cookies.set('refreshToken', data.refreshToken, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 120 * 60 * 24 * 30
		});
		const checkRoad = cookies.get('pageRoad');
		if (!checkRoad) {
			throw redirect(302, '/');
		}
		cookies.delete('pageRoad', { path: '/' });
		throw redirect(302, `${checkRoad}`);
	}
} satisfies Actions;
