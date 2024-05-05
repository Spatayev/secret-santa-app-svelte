<script>
	import { goto } from '$app/navigation';
	import { MAIN_PAGE } from '$lib/data';
	import Santa from '$lib/santa.svelte';
</script>

<main class="container">
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
				class="create btn"
				on:click={() => {
					goto('/games/create');
				}}
			>
				{MAIN_PAGE.buttonCreate}
			</button>
			<button class="play btn">
				{MAIN_PAGE.buttonShuffle}
			</button>
		</div>
	</article>
	<aside class="img part"><Santa /></aside>
</main>

<style>
</style>
