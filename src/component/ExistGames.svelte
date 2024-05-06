<script lang="ts">
	import { GAME_COMP } from '$lib/data';
	import Santa from '$lib/santa.svg?url';
	export let existGames;
</script>
<div class='imgBox'>
	<img src={Santa} alt="santa img">
</div>
<div class='contentBox'>
	<h3 class="title game-title">{existGames.name}</h3>
	<small class='about-game'>{GAME_COMP[existGames.role]}</small>
	<small class='about-game'>{`${GAME_COMP.quantity} ${existGames.participantCount}`}</small>
	<a class='btn-secret' href={`/games/created/${existGames.id}`}>Пригласить участников</a>
</div>
