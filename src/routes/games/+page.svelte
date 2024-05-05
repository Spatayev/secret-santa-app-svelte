<script lang="ts">
	import { goto } from '$app/navigation';
	import { GAME_PAGE } from '$lib/data';
	import ExistGames from '../../component/ExistGames.svelte';
	import {fly} from 'svelte/transition'
	export let data;
</script>

<main class='container' transition:fly = {{x: -200}}>
	<section>
		<div>
			<h1>
				{GAME_PAGE.header}
			</h1>
		</div>
		<div>
			{#each data.res as existGames}
				<ExistGames {existGames} />
                <div><a href={`/games/created/${existGames.id}`}>Пригласить участников</a></div>
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