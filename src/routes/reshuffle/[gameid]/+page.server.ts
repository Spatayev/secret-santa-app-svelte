import type { PageServerLoad, Actions } from './$types';
import { BASE_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies, params }) => {
	const response = await fetch( `${BASE_URL}wishlist/${params.gameid}/my-giftee-wishlist`, {

			method: 'GET',
			headers: {
				Authorization: `Bearer ${cookies.get('accessToken')}`,
				'Content-Type': 'application/json'
			}
		}
	);
	if (!response.ok) {
		const badRes = await response.text();
		console.log('badres', badRes);
		return { badRes };
	}
	const result = await response.json();
	console.log(result);
	return { result };
};

export const actions = {
	default: async ({ params, cookies }) => {
		const response = await fetch(`http://158.160.21.73:8080/games/${params.gameid}/reshuffle`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${cookies.get('accessToken')}`,
				'Content-Type': 'application/json'
			}
		});
		if (!response.ok) {
			const badRes = await response.text();
			console.log(badRes, 'badRes');
			return { badRes };
		}
		const actionRes = await response.text();
		console.log('action', actionRes);
		return { actionRes };
	}
} satisfies Actions;
