import { redirect } from '@sveltejs/kit';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	login: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(4)
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	signup: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(schema));
		console.log(form);
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log('body', JSON.stringify(form.data));
		const responce = await fetch('http://51.107.14.25:8080/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form.data)
		});
		if (!responce.ok) {
			const message = await responce.text();
			console.log('message', message);
			return { data: null, error: message };
		}
		const data = await responce.json();
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
		throw redirect(302, '/');
	}
};
