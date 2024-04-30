<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;

	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
  
	const url = writable(data.res.link);
	const copied = writable(false);
  
	onMount(async () => {
	  if (data && data.link) {
		const modifiedUrl = data.link.replace(/\/invitations\/accept\//, "/invitations_accept/");
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

<section>



	<div class="container">
		<h3 align="center">Пригласить участников</h3>
		<p align="center">Скопируйте ссылку ниже и отправьте её своим друзьям.</p>
		<p align="center">После перехода по ссылке, участники смогут создать карточки для участия самостоятельно.</p>
		<div class="styled-box">
			<input type="text" bind:value={$url} readonly>
			<button class="main-button" on:click={handleCopyToClipboard}>{#if $copied}Скопировано!{:else}Копировать{/if}</button>
		</div>
		</div>

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
</section>
