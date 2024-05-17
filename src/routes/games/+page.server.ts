import type { PageServerLoad } from './$types';
import { BASE_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ cookies }) => {
		const responce = await fetch( `${BASE_URL}games/mygames`, {
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
	const res = await responce.json();
	return { res };
};
