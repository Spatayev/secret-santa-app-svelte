<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';

	export let data: PageData;

	// Client API:
	const { form, errors, message } = superForm(data.form);
</script>

<main class="container">
	
	<form class='form-section login' method="POST" action="?/login">
		<article class='title-section'>
			<h3>Войти</h3>
		</article>
		<label for="email">Ваш E-mail</label>
		<input class='input-style' type="email" name="email" id="email" bind:value={$form.email} />
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}
		<label for="password">Ваш Пароль</label>
		<input class='input-style' type="password" name="password" id="password" bind:value={$form.password} />
		{#if $errors.password}
			<small>{$errors.password}</small>
		{/if}
		<div class='sector'>
			<a href="/forgot-password">Забыли пароль?</a>
		</div>
		<div class='center'>
			<button class='primary-btn' type="submit">Войти</button>
		</div>
		{#if $message}
			<div>{$message}</div>
		{/if}
		
	</form>
</main>

<style></style>