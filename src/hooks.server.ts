import type { Handle } from '@sveltejs/kit';
export const handle: Handle = async ({ event, resolve }) => {
	const session = event.cookies.get('accessToken');
	console.log(session);
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
