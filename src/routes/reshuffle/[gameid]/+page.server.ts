import { sess_cookie_name } from '$env/static/private';
import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';

import { PUBLIC_BASE_URL, PUBLIC_language } from '$env/static/public';



// Define outside the load function so the adapter can be cached
const schema = z.object({
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

		


		if (!form.valid) {
			return fail(400, { form });
		}
		
		try {
		const response = await fetch(PUBLIC_BASE_URL + '/games/' + params.gameid + '/reshuffle/', {
			method: 'POST',
			headers: {
				'accept': '*/*',
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
		return message(form, error.message || 'reshuffle: Internal Server Error 500');

	}
  },

  show_all_user: async ({ request, params, cookies  }) => {

    
		console.log('show_all_user');
		console.log(cookies);


        console.log('список участников до жеребьевки');
        console.log('/gameuser/{gameId}/list-before-shuffle');

        console.log('список участников после жеребьевки');
        console.log('/gameuser/{gameId}/list-after-shuffle');


        
  }
};
