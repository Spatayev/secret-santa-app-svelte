<script lang="ts">
	import { CREATE_PAGE } from '$lib/data';
	let yes = false;
</script>

<section>
	<h2>{CREATE_PAGE.title}</h2>
	<form method="POST">
		<label for="game">
			{CREATE_PAGE.gameName}
			<input type="text" name="game" id="game" />
		</label>
		<label for="id">
			{CREATE_PAGE.idGames}
			<input type="text" name="id" id="id" />
		</label>
		<label for="check">
			{CREATE_PAGE.radioButton}
			<input type="checkbox" name="check" id="check" bind:checked={yes} />
		</label>
		{#if yes}
			<label for="price">
				{CREATE_PAGE.price}
				<input type="number" name="price" id="price" />
			</label>
		{/if}
	</form>
</section>
