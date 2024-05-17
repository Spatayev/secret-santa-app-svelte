import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { Actions, PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';
const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

const schema = z.object({
	email: z.string(),
	userName: z.string().min(1),
	phoneNumber: z.string().regex(phoneRegex, 'Некорректный номер')
});

export const load: PageServerLoad = async ({ cookies }) => {
	const form = await superValidate(zod(schema));
	const response = await fetch(`${BASE_URL}settings/user-info`, {
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
	contact: async ({ request, params, cookies }) => {
		const form = await superValidate(request, zod(schema));
		console.log('form', form);
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log('body', JSON.stringify(form.data));
		const response = await fetch(`${BASE_URL}gameuser/${params.gameid}/contact-info` , {
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
		// router.push(`/wish-list/`)

		console.log('data', data);
		throw redirect(302, `/wishlist/${params.gameid}`);
	}
} satisfies Actions;
