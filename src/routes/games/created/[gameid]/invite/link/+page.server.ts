import type { PageServerLoad } from '../link/$types';
export const load: PageServerLoad = async ({ params, cookies }) => {
	const responce = await fetch(
		`http://158.160.21.73:8080/invitations/generate-link?gameId=${await params.gameid}`,
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
