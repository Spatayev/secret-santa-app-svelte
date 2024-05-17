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
		<label for="name">{CREATE_PAGE.gameName}</label>
		<input class={$errors.name ? 'error-input input-style' : 'input-style'} type="text" name="name" />
		{#if $errors.name}
			<small>{$errors.name}</small>
		{/if}
	<span class="span">{CREATE_PAGE.radioButton}</span>	

		<div class="toggle-switch">
			<input id="switch" class="toggle-switch-checkbox" type="checkbox" name="priceLimitChecked" bind:checked={yes} />
		<label for="switch" class="toggle-switch-label">
			
			{#if $errors.priceLimitChecked}
				<small>{$errors.priceLimitChecked}</small>
			{/if}
		</label>

	</div>


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

<style>
.span{
	margin-top: 0.5rem;
}
	.toggle-switch {
  position: relative;
  width: 50px;
  height: 25px;
  display: inline-block;
  top:-1.5rem;
  left: 17rem;
}

.toggle-switch-checkbox {
  display: none;
}

.toggle-switch-label {
  display: block;
  width: 100%;
  height: 100%;
  background-color: #ccc;
  border-radius: 25px;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
}

.toggle-switch-label:before {
  content: '';
  position: absolute;
  width: 23px;
  height: 23px;
  left: 1px;
  bottom: 1px;
  background-color: white;
  border-radius: 50%;
  transition: transform 0.3s ease;
}

.toggle-switch-checkbox:checked + .toggle-switch-label {
  background-color: #60b044;
}

.toggle-switch-checkbox:checked + .toggle-switch-label:before {
  transform: translateX(25px);
}
</style>