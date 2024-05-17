import type { PageServerLoad } from './$types';
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
