import type { PageServerLoad, Actions } from '../signup/$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schemaAcc = z.object({
	login: z.string().min(1),
	email: z.string().email()
});
const schemaPass = z.object({
	password: z.string().min(4)
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
	change: async ({ cookies, request }) => {}
};
