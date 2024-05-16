<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	export let data: PageData;
</script>

<main class="container">
	<section class='form-section'>
		
			<article class='title-section'>
				<h2>Игра создана</h2>
			</article>
		{#if (!data.result)}
			<div class='card'>
				<h4>Пока что никого нет</h4>
			</div>
		{:else}
			{#each data.result as players}
				<div class='players-card'>
					<h4>{players.user}</h4>
					<p><span>Status:</span> {players.invitationStatus}</p>
				</div>
			{/each}
			{#if data.result.length > 2 && data.isAcceptable}
				<div class='center' >
					<button on:click={()=>{goto(`../../reshuffle/${data.gameid}/`)}} class='primary-btn'>Провести жеребьевку</button>
				</div>
			{/if}
		{/if}
		<div class='center'>
			<button class='primary-btn'
			on:click={() => {
				goto(`/games/created/${data.gameid}/invite`);
			}}>Добавить участников</button
		>
		</div>
	</section>
	
</main>
