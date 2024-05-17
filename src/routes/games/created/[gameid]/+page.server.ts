import type { PageServerLoad } from './$types';
import { BASE_URL } from '$env/static/private';

export const load: PageServerLoad = async ({ params, cookies }) => {
	const response = await fetch( `${BASE_URL}gameuser/${params.gameid}/list-before-shuffle`, {
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
	const gameid = params.gameid;
	console.log(result);
	const isAcceptable = result.filter((ready) => ready.invitationStatus === 'ACCEPTED').length > 1;
	return { gameid, result, isAcceptable };
};
