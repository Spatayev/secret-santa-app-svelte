<script lang="ts">
	import SuperDebug, { superForm } from 'sveltekit-superforms';

export let data;

const { form, errors, message } = superForm(data.form);
</script>
<SuperDebug data={$form} />

<form method="POST" action="?/forgot">
	<label for="email">
		Ваш E-mail
		<input type="email" name="email" bind:value={$form.email} />
		{#if $errors.email}
			<small>{$errors.email}</small>
		{/if}
        <button type="submit">send</button>
	</label>
    {#if $message}
    <div>{$message}</div>
{/if}
</form>