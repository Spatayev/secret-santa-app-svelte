<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { CREATE_PAGE } from '$lib/data';
	import { scale } from 'svelte/transition';
	let yes = false;
	export let data;
	const { form, errors } = superForm(data.form);
</script>

<main class="container">
	<form class='form-section' method="POST" action="?/create">
		<article class='title-section'>
			<h3>{CREATE_PAGE.title}</h3>
		</article>
		<label for="name">
			{CREATE_PAGE.gameName}
			<input class='input-style' type="text" name="name" />
			{#if $errors.name}
				<small>{$errors.name}</small>
			{/if}
		</label>
		<label for="priceLimitChecked">
			{CREATE_PAGE.radioButton}
			<input type="checkbox" name="priceLimitChecked" bind:checked={yes} />
			{#if $errors.priceLimitChecked}
				<small>{$errors.priceLimitChecked}</small>
			{/if}
		</label>
		{#if yes}
			<label in:scale for="maxPrice">
				{CREATE_PAGE.price}
			</label>
			<input class='input-style' type="number" name="maxPrice" />
				{#if $errors.maxPrice}
					<small>{$errors.maxPrice}</small>
				{/if}
		{/if}
		<div class='center'>
			<button class='primary-btn' type="submit">Создать</button>
		</div>
		
	</form>
</main>
