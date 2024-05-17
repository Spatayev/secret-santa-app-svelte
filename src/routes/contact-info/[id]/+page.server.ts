import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { BASE_URL } from '$env/static/private';

const schema = z.object({
	email: z.string(),
	userName: z.string().min(1),
	phoneNumber: z.number().min(1)
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	contact: async ({ request, params, cookies }) => {
		const { id } = params;
		const form = await superValidate(request, zod(schema));
		console.log('form', form);
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log('body', JSON.stringify(form.data));
		const response = await fetch( `${BASE_URL}gameuser${await params.id}/contact-info`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${cookies.get('accessToken')}`
				},
				body: JSON.stringify(form.data)
			}
		);
		if (!response.ok) {
			const badRes = await response.text();
			console.log('res', response.status);

			return message(form, badRes);
		}
		const data = await response.text();

		console.log('data', data);
		return data;
	}
} satisfies Actions;
