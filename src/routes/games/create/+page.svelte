<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { CREATE_PAGE } from '$lib/data';
	let yes = false;
	export let data;
	const { form, errors } = superForm(data.form);
</script>

<main class="container">
	<h2>{CREATE_PAGE.title}</h2>
	<form method="POST" action="?/create">
		<label for="name">
			{CREATE_PAGE.gameName}
			<input type="text" name="name" />
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
			<label for="maxPrice">
				{CREATE_PAGE.price}
				<input type="number" name="maxPrice" />
				{#if $errors.maxPrice}
					<small>{$errors.maxPrice}</small>
				{/if}
			</label>
		{/if}
		<button type="submit">Создать</button>
	</form>
</main>
