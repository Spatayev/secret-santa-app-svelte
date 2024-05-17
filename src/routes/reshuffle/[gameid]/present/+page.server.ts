import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ cookies, params }) => {
	const response = await fetch(
		`http://158.160.21.73:8080/wishlist/${params.gameid}/my-giftee-wishlist`,
		{
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
