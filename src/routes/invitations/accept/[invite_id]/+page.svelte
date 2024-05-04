<script lang="ts">
	import { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors, message } = superForm(data.form);
</script>

<main class="container">

        <div>
          <h5>Подтвердить приглашение</h5>
        </div>

	<form method="POST" action="?/accept">

		
			inviter_id
			<input type="hidden" name="inviter_id" value="12345" />
			{#if $errors.inviter_id}
				<small>{$errors.inviter_id}</small>
			{/if}
		

		<div>
			<button type="submit">Подтвердить</button>
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
