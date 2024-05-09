import type { PageServerLoad, Actions } from './$types';
import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const passSchema = z.object({
	email: z.string().email()
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(passSchema));

	return { form };
};

export const actions = {
	forgot: async (request) => {
		const form = await superValidate(request, zod(passSchema));
		if (!form.valid) {
			return fail(400, { form });
		}
		const response = await fetch(
			`http://158.160.21.73:8080/auth/forgot-password?email=${form.data.email}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(form.data)
			}
		);
		if (!response.ok) {
			const badRes = await response.text();
			return { badRes };
		}
		const data = await response.json();
		return { data };
	}
} satisfies Actions;
