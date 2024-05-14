<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';

export let data: PageData;

const { form, errors, message } = superForm(data.form);
</script>
<main class='container'>
	<form class='form-section' method="POST">
		<article class='title-section'>
			<h3>Восстановить доступ</h3>
		</article>
		<label for="email">
			Ваш E-mail
			<input type="email" class='input-style' name="email" bind:value={$form.email} />
			{#if $errors.email}
				<small>{$errors.email}</small>
			{/if}
			<div class='center'><button class='primary-btn' type="submit">Отправить</button></div>
		</label>
	{#if $message}
		<div>{$message}</div>
	{/if}
	</form>
</main>
