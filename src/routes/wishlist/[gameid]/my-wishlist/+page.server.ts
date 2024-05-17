import type { PageServerLoad } from './$types';
import { BASE_URL } from '$env/static/private';

type Props={
	id: string,
    gameId: string,
    userId: string,
    description: string,
    email: string
  }|undefined|null
export const load: PageServerLoad = async ({ cookies ,params}) => {
		const responce = await fetch(`${BASE_URL}wishlist/${params.gameid}/my-wishlist` , {

		method: 'GET',
		headers: {
			Authorization: `Bearer ${cookies.get('accessToken')}`,
			'Content-Type': 'application/json'
		}
	});
	if (!responce.ok) {
		const badRes = await responce.text();
		return { badRes };
	}
	const data:Props[] = await responce.json();
	console.log(data);
	
	return { data };
};
