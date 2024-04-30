import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';
// Define outside the load function so the adapter can be cached
const schema = z.object({
	name: z.string().min(1),
	maxPrice: z.number().optional(),
	priceLimitChecked: z.boolean()
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	return { form };
};

export const actions = {
	create: async ({ request, cookies }) => {
		const form = await superValidate(request, zod(schema));
		if (!form.valid) {
			return fail(400, { form });
		}
		console.log(JSON.stringify(form.data));
		const responce = await fetch('http://51.107.14.25:8080/games/create-game', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${cookies.get('accessToken')}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(form.data)
		});
		if (!responce.ok) {
			const badRes = await responce.text();
			console.log('fail', badRes);
			return message(form, badRes);
		}
		const res = await responce.json();
		cookies.set('gameid', res.id, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 30
		});

		throw redirect(302, `/games/created/${res.id}`);
	}
};
