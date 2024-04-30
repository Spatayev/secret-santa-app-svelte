import type { Load } from "@sveltejs/kit"


export const load: Load = ({ params }) => {

	console.log('params:' + params.gameid);
    return {
        gameid: params.gameid
    }
}
