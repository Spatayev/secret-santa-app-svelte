import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ cookies }) => {
	const responce = await fetch('http://158.160.21.73:8080/games/mygames', {
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
