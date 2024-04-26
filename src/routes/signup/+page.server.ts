import { fail, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(4)
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	default: async (event) => {
		const form = await superValidate(event, zod(schema));
		console.log(form);
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log(JSON.stringify(form));
		const responce = await fetch('http://51.107.14.25:8080/auth/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form)
		});
		if (!responce.ok) {
			console.log('bad', responce.status);
		}
		console.log('result', responce.json);
	}
};
