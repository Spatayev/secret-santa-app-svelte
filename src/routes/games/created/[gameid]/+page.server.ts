import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, cookies }) => {
	const response = await fetch(
		`http://158.160.21.73:8080/gameuser/${params.gameid}/list-before-shuffle`,
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
	const gameid = params.gameid;
	console.log('result', result);
	const isAcceptable = result.filter((ready) => ready.invitationStatus === 'ACCEPTED').length > 1;
	const isFinished =
		result.filter((finished) => finished.status === 'MATCHING_COMPLETED').length > 1;
	return { gameid, result, isAcceptable, isFinished };
};
