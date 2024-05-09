import type { PageServerLoad, Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = ({ cookies }) => {
	cookies.delete('accessToken', { path: '/' });
	cookies.delete('refreshToken', { path: '/' });
	cookies.delete('gameId', { path: '/' });
	throw redirect(302, '/');
};
