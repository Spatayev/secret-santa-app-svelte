import { sess_cookie_name } from '$env/static/private';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

import { PUBLIC_BASE_URL, PUBLIC_language } from '$env/static/public';



// Define outside the load function so the adapter can be cached
const schema = z.object({
	inviter_id: z.string().min(2),

});

 
export const load = async () => {
    console.log('sess_cookie_name');
    console.log(sess_cookie_name);
    
    
	const form = await superValidate(zod(schema));

	// Always return { form } in load functions
	return { form };
};


export const actions = {
	start_game: async ({ request, params, cookies  }) => {
		const form = await superValidate(request, zod(schema));

		console.log('start_game');
		console.log(cookies);

        console.log('gameid');

		console.log(params.gameid);

		console.log(cookies.get('accessToken'));


		if (!form.valid) {
			return fail(400, { form });
		}
		
		try {
		const response = await fetch(
			`http://158.160.21.73:8080/games/${params.gameid}/reshuffle`,

			{
			method: 'POST',
			headers: {
				'accept': '*/*',
				Authorization: `Bearer ${cookies.get('accessToken')}`,
			},
			body: JSON.stringify({})
		});
		console.log('response .status');
		console.log(response.status);

		if (response.status === 200 ) {
			
			const successText = await response.text();
			console.log('successText');
			console.log(successText);

			return message(form, successText);
		}
		else {
			let errorText = await response.text();
			errorText +=  'Ошибка: ' + response.status + ' ';
			console.log('errorText');
			console.log(errorText);

			return message(form, errorText);
		}

	} catch(error) {
		return message(form, error.message || 'reshuffle: Internal Server Error 500');

	}
  }


};
