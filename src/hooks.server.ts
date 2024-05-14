import type { Handle } from '@sveltejs/kit';
import { redirect } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('accessToken');
	if (event.url.pathname.startsWith('/games') && !session) {
		event.cookies.set('pageRoad', event.url.pathname, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 120 * 60 * 24 * 30
		});
		console.log(event.cookies.get('pageRoad'));
		throw redirect(302, '/signup');
	} else if (event.url.pathname.startsWith('/invitations') && !session) {
		event.cookies.set('pageRoad', event.url.pathname, {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 120 * 60 * 24 * 30
		});
		console.log(event.cookies.get('pageRoad'));
		throw redirect(302, '/signup');
	}
	if (!session) {
		event.locals = {
			token: session
		};
		return await resolve(event);
	}
	event.locals = {
		token: session
	};
	return await resolve(event);
};
