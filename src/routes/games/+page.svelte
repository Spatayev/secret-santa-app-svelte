<script>
	import { goto } from '$app/navigation';
	import { GAME_PAGE } from '$lib/data';
	import ExistGames from '../../component/ExistGames.svelte';
	export let data;
</script>

<main>
	<section>
		<div>
			<h1>
				{GAME_PAGE.header}
			</h1>
		</div>
		<div>
			{#each data.res as existGames}
				<ExistGames />
			{/each}
		</div>
		<div>
			<button
				on:click={() => {
					goto('/games/create');
				}}>{GAME_PAGE.buttonCreate}</button
			>
		</div>
	</section>
</main>
