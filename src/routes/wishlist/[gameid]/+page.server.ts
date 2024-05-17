import { redirect } from '@sveltejs/kit';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

// Define outside the load function so the adapter can be cached
const schema = z.object({
	name0: z.string().min(2, 'Должен быть выбран хоть один подарок'),
	name1: z.string().min(2).optional(),
	name2: z.string().min(2).optional(),
	name3: z.string().min(2).optional(),
	name4: z.string().min(2).optional(),
	name5: z.string().min(2).optional(),
	name6: z.string().min(2).optional(),
	name7: z.string().min(2).optional(),
	name8: z.string().min(2).optional(),
	name9: z.string().min(2).optional()
});

export const load = async () => {
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};

export const actions = {
	save_gifts: async ({ request, params, cookies }) => {
		const form = await superValidate(request, zod(schema));

		console.log('save_gifts');
		console.log(cookies.get('accessToken'));

		const jsonData = form.data;
		const dataArray = Object.values(jsonData);
		const filteredDataArray = dataArray.filter((value) => value !== undefined);

		console.log(JSON.stringify(filteredDataArray));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			const response = await fetch(
				`http://158.160.21.73:8080/wishlist/${params.gameid}/create-wishlist`,
				{
					method: 'POST',
					headers: {
						accept: '*/*',
						'Content-Type': 'application/json',
						Authorization: `Bearer ${cookies.get('accessToken')}`
					},
					body: JSON.stringify(filteredDataArray)
				}
			);
			console.log('response accept1');
			console.log(response);

			if (!response.ok) {
				const errorText = await response.text();
				return message(form, errorText || 'Gift: Internal Server Error 400');
			} else {
				const successText = await response.text();
				return message(form, successText || 'Add Gift: success');

				//  redirect(302, `/wishlist/${params.gameid}/card-created`);
			}
		} catch (error) {
			return message(form, error.message || 'Gift: Internal Server Error 500');
		}
	}
};
