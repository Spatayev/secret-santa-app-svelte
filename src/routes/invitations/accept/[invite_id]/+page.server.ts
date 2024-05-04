import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	inviter_id: z.string().min(2),
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	accept: async ({ request, params, cookies  }) => {
		const form = await superValidate(request, zod(schema));

		console.log('inviter_id');
		console.log(cookies);

		

		//console.log(form);

		if (!form.valid) {
			return fail(400, { form });
		}
		
		try {
		const response = await fetch('http://158.160.21.73:8080/invitations/accept/' + params.invite_id, {
			method: 'POST',
			headers: {
				'accept': '*/*',
				'Content-Type': 'application/json',
				Authorization: `Bearer ${cookies.get('accessToken')}`,
			},
			body: JSON.stringify({})
		});
		console.log('response accept');
		console.log(response);

		if (!response.ok) {
			const errorText = await response.text();
			return message(form, errorText);
		}
		else {
			const successText = await response.text();
			return message(form, successText);
		}

	} catch(error) {
		return message(form, error.message || 'Send: Internal Server Error 500');

	}
  }
};
