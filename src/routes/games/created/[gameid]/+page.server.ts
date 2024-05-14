// export const load: PageLoad = ({ params }) => {
// 	console.log('params:' + params.gameid);
// 	return {
// 		gameid: params.gameid
// 	};
// };
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
	const gameid = params.gameid;
	return { gameid };
};
