import type { PageServerLoad } from '../link/$types';
import { BASE_URL } from '$env/static/private';
export const load: PageServerLoad = async ({ params, cookies }) => {
	const response = await fetch(`${BASE_URL}gameuser/${await params.gameid}/list-before-shuffle`, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${cookies.get('accessToken')}`,
			'Content-Type': 'application/json'
		}
	});
	if (!response.ok) {
		const badRes = await response.text();
		return { badRes };
	}
	const res = await response.json();
	console.log(res);
	return { res };
};
