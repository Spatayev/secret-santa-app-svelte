<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors, message } = superForm(data.form);
</script>

<main class="container">
	<form method="POST" action="?/signup">
		<label for="name">
			Ваше Имя
			<input type="text" name="login" id="login" bind:value={$form.login} />
			{#if $errors.login}
				<small>{$errors.login}</small>
			{/if}
		</label>
		<label for="email">
			Ваш E-mail
			<input type="email" name="email" id="email" bind:value={$form.email} />
			{#if $errors.email}
				<small>{$errors.email}</small>
			{/if}
		</label>
		<label for="password">
			Ваш Пароль
			<input type="password" name="password" id="password" bind:value={$form.password} />
			{#if $errors.password}
				<small>{$errors.password}</small>
			{/if}
		</label>
		<div>
			<button type="submit">Регистрация</button>
		</div>
		{#if $message}
			<div>{$message}</div>
		{/if}
	</form>
</main>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
