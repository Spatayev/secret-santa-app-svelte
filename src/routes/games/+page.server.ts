import type { PageServerLoad } from '../signup/$types';
export const load: PageServerLoad = async ({ cookies }) => {
	const responce = await fetch('http://51.107.14.25:8080/games/mygames', {
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
	console.log(res);
	return { res };
};
