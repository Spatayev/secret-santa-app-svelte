import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals }) => {
	const isEntry = locals.token;
	if (isEntry) {
		return { acces: true };
	}
	return { acces: false };
};
