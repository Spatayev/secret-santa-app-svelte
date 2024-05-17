/** @type {import('./$types').Actions} */

import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
import type { PageServerLoad } from '../$types';
import { BASE_URL } from '$env/static/private';

// Define outside the load function so the adapter can be cached

const schema = z.object({
	name0: z.string().min(2),
	email0: z.string().email(),
	name1: z.string().min(2).optional(),
	email1: z.string().email().optional(),
	name2: z.string().min(2).optional(),
	email2: z.string().email().optional(),
	name3: z.string().min(2).optional(),
	email3: z.string().email().optional(),
	name4: z.string().min(2).optional(),
	email4: z.string().email().optional(),
	name5: z.string().min(2),
	emai5: z.string().email(),
	name6: z.string().min(2).optional(),
	email6: z.string().email().optional(),
	name7: z.string().min(2).optional(),
	email7: z.string().email().optional(),
	name8: z.string().min(2).optional(),
	email8: z.string().email().optional(),
	name9: z.string().min(2).optional(),
	email9: z.string().email().optional()
});

export const load: PageServerLoad = async (event) => {
	console.log('load');

	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	sender: async (request) => {
		console.log('sendersendersender');

		const form = await superValidate(request, zod(schema));
		console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		}

		console.log('request');
		console.log(request.locals.token);

		try {
			const invitations = [];
			for (let i = 0; i < 10; i++) {
				if (form.data[`name${i}`] && form.data[`email${i}`]) {
					invitations.push({
						name: form.data[`name${i}`],
						email: form.data[`email${i}`]
					});
				}
			}

			console.log(JSON.stringify(invitations));
	const response = await fetch( `${BASE_URL}invitations/${request.params.gameid}/send`, {
					method: 'POST',
					headers: {
						accept: '*/*',
						'Content-Type': 'application/json',
						Authorization: `Bearer ${request.locals.token}`
					},
					body: JSON.stringify(invitations)
				}
			);
			console.log('response');
			console.log(response);

			if (!response.ok) {
				const errorText = await response.text();
				return message(form, errorText);
			} else {
				const successText = await response.text();
				return message(form, successText);
			}
		} catch (error) {
			return message(form, error.message || 'Send: Internal Server Error 500');
		}
	}
};
