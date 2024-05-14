<script lang="ts">
	import type { PageData } from './$types';
	
	import SantaInSled from '$lib/santa-in-sled.svg?url'
	import { goto } from '$app/navigation';
	import { GAME_PAGE } from '$lib/data';
	import ExistGames from '../../component/ExistGames.svelte';
	import {fly} from 'svelte/transition'
	export let data: PageData;
</script>

<main class='container' transition:fly = {{x: -200}}>
	<section class='form-section'>
		<article class='title-section'>
			<h3>
				{GAME_PAGE.header}
			</h3>
		</article>
		
		{#if data.res.length > 0}
			<div class=games>
				{#each data.res as existGames}
					<div class='card'>
						<ExistGames {existGames} />
					</div>
				{/each}
			</div>
			
		{:else}
			<div class='card'>
				<div class='div-img'>
					<img class='card-img' src={SantaInSled} alt="Santa in sled">
				</div>
				<h4>Пока что Вы не участвуете в играх</h4>
				<p>Создайте или вступите в игру, чтоб принять участие</p>
			</div>
		{/if}
		
		<div class='center'>
			<button
				class='primary-btn'
				on:click={() => {
					goto('/games/create');
				}}>{GAME_PAGE.buttonCreate}</button
			>
		</div>
	</section>
</main>