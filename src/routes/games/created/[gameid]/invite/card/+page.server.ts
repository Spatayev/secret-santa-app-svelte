
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const schema = z.object({
	email: z.string(),
    userName:z.string().min(1),
    phoneNumber:z.number().min(1)
});

export const load:PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	contact: async ({ request ,params ,cookies}) => {
		const form = await superValidate(request, zod(schema));
		console.log('form', form);
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log('body', JSON.stringify(form.data));
		const response = await fetch(
			`http://158.160.21.73:8080/gameuser/${await params.gameid}/contact-info`,
			{
				method: 'POST',	
			    headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${cookies.get('accessToken')}`,
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
		// router.push(`/wish-list/`)

		console.log('data', data );
        throw redirect(302, `/wishlist/${params.gameid}`);
	}
} satisfies Actions;
