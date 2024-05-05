import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

const schema = z.object({
	email: z.string().email(),
});

export const load = async () => {
	const form = await superValidate(zod(schema));

    return { form };
};

export const actions = {
	forgot: async ({ request}:{request:any}) => {
		const form = await superValidate(request, zod(schema));
		console.log('form',form);
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log('body', JSON.stringify(form.data.email));
		const responce = await fetch(`http://51.107.14.25:8080/auth/forgot-password?email=${form.data.email}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form.data)
		});
		if (!responce.ok) {
			const badRes = await responce.text();
			console.log('res' ,responce.status);
			
			return message(form, badRes);

		}
		const data = await responce.json();
	console.log( 'data',data);
    return data;
	}
};
