import type { PageServerLoad } from '../link/$types';
import { BASE_URL } from '$env/static/private';
export const load: PageServerLoad = async ({ params, cookies }) => {
	const responce = await fetch(
		`${BASE_URL}invitations/generate-link?gameId=${await params.gameid}`,
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
