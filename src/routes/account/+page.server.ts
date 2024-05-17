import { redirect } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from '../signup/$types';
import { message, fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { BASE_URL } from '$env/static/private';





const schemaAcc = z.object({
	newLogin: z.string().min(1),
	newEmail: z.string().email()
});
export const load: PageServerLoad = async ({ cookies }) => {

	console.log('static/private BASE_URL');
	console.log(`${BASE_URL}/settings/user-info`);
	console.log('BASE_URL');


	const form = await superValidate(zod(schemaAcc));
	const response = await fetch( `${BASE_URL}settings/user-info`, {
		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookies.get('accessToken')}`,
			'Content-Type': 'application/json'
		}
	});
	if (!response.ok) {
		const badRes = await response.text();
		return { form, badRes };
	}
	const res = await response.json();
	console.log(res);
	return { form, res };
};

export const actions = {
	change: async ({ cookies, request }) => {
		const form = await superValidate(request, zod(schemaAcc));

		console.log('form.data');
		console.log(form.data);


		if (!form.valid) {
			return fail(400, { form });
		}
		const responce = await fetch(`${BASE_URL}settings/update-login-email` , {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${cookies.get('accessToken')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form.data)
		});
		if (!responce.ok) {
			const badRes = await responce.text();
			return message(form, badRes);
		}
		const res = await responce.text();

		cookies.delete('accessToken', { path: '/' });
		cookies.delete('refreshToken', { path: '/' });
		cookies.delete('gameId', { path: '/' });
		
		throw redirect(302, `\login`);


		return { res : res};
	}
} satisfies Actions;
