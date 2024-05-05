<script lang='ts'>
	import {fly} from 'svelte/transition'
	import { goto } from '$app/navigation';
	import { MAIN_PAGE } from '$lib/data';
	import Santa from '$lib/santa.svg';
	import SnowfallAnimation from '$lib/snowfallAnimation.svelte';
</script>

<main class="container" transition:fly ={{ x: -200}}>

	<article class="text part">
		<section>
			<div>
				<h1>{MAIN_PAGE.header}</h1>
			</div>
			<div>
				<p>{MAIN_PAGE.title}</p>
			</div>
		</section>
		<div>
			<button
				class="primary-btn"
				on:click={() => {
					goto('/games/create');
				}}
			>
				{MAIN_PAGE.buttonCreate}
			</button>
			<button class="primary-btn">
				{MAIN_PAGE.buttonShuffle}
			</button>
		</div>
	</article>
	<aside class="img part"><Santa /></aside>
	<SnowfallAnimation/>
</main>

