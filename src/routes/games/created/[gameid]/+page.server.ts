// export const load: PageLoad = ({ params }) => {
// 	console.log('params:' + params.gameid);
// 	return {
// 		gameid: params.gameid
// 	};
// };
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params, cookies }) => {
	const response = await fetch(
		`http://158.160.21.73:8080/gameuser/${await params.gameid}/list-before-shuffle`,
		{
			method: 'POST',
			headers: {
				Authorization: `Bearer ${cookies.get('accessToken')}`,
				'Content-Type': 'application/json'
			}
		}
	);
	if (!response.ok) {
		const badRes = await response.text();
		return { badRes };
	}
	const res = await response.json();
	console.log(res);
	return { gameid: params.gameid, res };
};
