import type { LayoutServerLoad } from './$types';
export const load: LayoutServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('accessToken');

	return {
		sessionid
	};
};
