import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
	const gameid = await params.gameid;
	return { gameid };
};
