<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import type { PageData } from '../$types';
	export let data: PageData;

	const url = writable(data.res.link);
	const copied = writable(false);

	onMount(async () => {
		if (data && data.link) {
			const modifiedUrl = data.link.replace(/\/invitations\/accept\//, '/invitations_accept/');
			url.set(modifiedUrl);
		}
	});

	const handleCopyToClipboard = () => {
		navigator.clipboard.writeText($url);
		copied.set(true);
		setTimeout(() => {
			copied.set(false);
		}, 2000);
	};
</script>

<main class="container">
	<section>
		<h3>Пригласить участников</h3>
		<div>
			<p>Скопируйте ссылку ниже и отправьте её своим друзьям.</p>
			<p>После перехода по ссылке, участники смогут создать карточки для участия самостоятельно.</p>
		</div>

		<div class="styled-box">
			<input type="text" bind:value={$url} readonly />
			<button class="main-button" on:click={handleCopyToClipboard}
				>{#if $copied}Скопировано!{:else}Копировать{/if}</button
			>
		</div>
	</section>

	<div>
		<button
			on:click={() => {
				goto('./card');
			}}
		>
			Создать свою карточку
		</button>
	</div>
	<div>
		<button
			on:click={() => {
				goto('/');
			}}
		>
			На главную страницу
		</button>
	</div>
</main>

<style>
</style>
