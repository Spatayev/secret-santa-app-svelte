export const load = async (cookies) => {
	const gameid = cookies.get('gameid');
	console.log(gameid);
	return { gameid };
};
