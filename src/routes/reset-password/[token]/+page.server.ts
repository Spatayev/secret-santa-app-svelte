import { z } from 'zod';
import type { PageServerLoad, Actions } from './$types';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { BASE_URL } from '$env/static/private';

const newPassSchema = z.object({
	newPassword: z.string().min(4),
	confirmPassword: z.string().min(4)
});
export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(newPassSchema));
	return { form };
};
export const actions = {
	reset: async ({ request, params }) => {
		const form = await superValidate(request, zod(newPassSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		const response = await fetch( `${BASE_URL}auth/reset-password/${params.token}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(form.data)
		});
		if (!response.ok) {
			const badRes = await response.text();
			console.log(badRes);
			return message(form, badRes);
		}
		const result = await response.text();
		console.log(result);
		return message(form, result);
	}
} satisfies Actions;
