<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors, message } = superForm(data.form);
</script>

<main class="container">

	<article class='title-section'>
		<h3>Регистрация</h3>
	</article>
	<form class='form-section registration' method="POST" action="?/signup">
		<label for="name">Ваше Имя</label>
		<input type="text" name="login" id="login" bind:value={$form.login} />
		{#if $errors.login}
			<small>{$errors.login}</small>
		{/if}

		<label for="email">Ваш E-mail</label>
			<input type="email" name="email" id="email" bind:value={$form.email} />
			{#if $errors.email}
				<small>{$errors.email}</small>
			{/if}

		<label for="password">Ваш Пароль</label>
		<input type="password" name="password" id="password" bind:value={$form.password} />
		{#if $errors.password}
			<small>{$errors.password}</small>
		{/if}
		<div>
			<button class='btn primary-btn' type="submit">Регистрация</button>
		</div>
		{#if $message}
			<div>{$message}</div>
		{/if}
	</form>
</main>
