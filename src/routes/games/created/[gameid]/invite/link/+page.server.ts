import type { PageServerLoad } from '../link/$types';
export const load: PageServerLoad = async ({ cookies }) => {
	const responce = await fetch(
		`http://51.107.14.25:8080/invitations/generate-link?gameId=${cookies.get('gameid')}`,
		{
			method: 'GET',
			headers: {
				Authorization: `Bearer ${cookies.get('accessToken')}`,
				'Content-Type': 'application/json'
			}
		}
	);
	if (!responce.ok) {
		const badRes = await responce.text();
		return { badRes };
	}
	const res = await responce.json();
	console.log(res);
	return { res };
};
