<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors } = superForm(data.form);
</script>

<SuperDebug data={$form} />
<form method="POST">
	<label for="name">
		Ваше Имя
		<input type="text" name="name" id="name" bind:value={$form.name} />
		{#if $errors.name}
			<small>{$errors.name}</small>
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
		<button type="submit">Submit</button>
	</div>
</form>

<style>
	form {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
</style>
