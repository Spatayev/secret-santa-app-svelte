<script lang="ts">
	import { GAME_COMP } from '$lib/data';

	export let existGames;
</script>

<section>
	<div>
		<h3>{existGames.name}</h3>
	</div>
	<div role="img"></div>
	<div>
		<small>{GAME_COMP[existGames.role]}</small>
		<small>{`${GAME_COMP.quantity} ${existGames.participantCount}`}</small>
	</div>
</section>
