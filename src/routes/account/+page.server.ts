import type { PageServerLoad, Actions } from '../signup/$types';
import { message, fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schemaAcc = z.object({
	newLogin: z.string().min(1),
	newEmail: z.string().email()
});
export const load: PageServerLoad = async ({ cookies }) => {
	const form = await superValidate(zod(schemaAcc));
	const response = await fetch('http://158.160.21.73:8080/settings/user-info', {
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
		if (!form.valid) {
			return fail(400, { form });
		}
		const responce = await fetch('http://158.160.21.73:8080/settings/update-login-email', {
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
		const res = await responce.json();
		return { res };
	}
} satisfies Actions;
