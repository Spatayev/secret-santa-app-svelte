import { fail, message, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad, Actions } from './$types';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import { BASE_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	inviter_id: z.string().min(2)
});

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	accept: async ({ request, params, cookies }) => {
		const form = await superValidate(request, zod(schema));

		if (!form.valid) {
			return fail(400, { form });
		}
		const response = await fetch(`${BASE_URL}invitations/accept/${params.invite_id}`, {
			method: 'POST',
			headers: {
				accept: '*/*',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${cookies.get('accessToken')}`
			},
			body: JSON.stringify({})
		});
		console.log('response accept');
		console.log(response);

		if (!response.ok) {
			const errorText = await response.text();
			return message(form, errorText);
		} else {
			const successText = await response.json();
			console.log(successText['gameId']);
			throw redirect(302, `../../wishlist/${successText['gameId']}/`);
		}
	}
} satisfies Actions;
