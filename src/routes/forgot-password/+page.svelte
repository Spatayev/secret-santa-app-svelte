<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import { Toaster, toast } from 'svelte-sonner'

	import { onMount } from 'svelte';


export let data: PageData;

const { form, errors, message } = superForm(data.form);

console.log('message');

console.log(message);

onMount(() => {
	toast.success("It works");
})


</script>
<Toaster richColors  />

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
		<div>{$message} </div>
	{/if}
	</form>


</main>
