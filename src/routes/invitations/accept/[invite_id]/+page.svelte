<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData, ActionData } from './$types';
	export let data: PageData;

	// Client API:
	const { form, errors, message } = superForm(data.form);
</script>

<main class="container">
	<form class ='form-section' method="POST" action="?/accept">
			<article class='title-section'>
            	<h3>Подтвердить приглашение</h3>
       		 </article>
			<input type="hidden" name="inviter_id" value="12345" />
			{#if $errors.inviter_id}
				<small>{$errors.inviter_id}</small>
			{/if}
		<div class='center'>
			<button class='primary-btn' type="submit">Подтвердить</button>
		</div>
		{#if $message}
			<div>{$message}</div>
		{/if}
	</form>
</main>

