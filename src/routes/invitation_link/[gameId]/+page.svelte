<script context="module">


</script>

<script>
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  export let data;
  export let params;
  const url = writable('http://51.107.14.25:3000/invitations/accept/85396de8-816d-481b-8686-99a028e81034');
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

<style>
  .styled-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
  }
  .main-button {
    margin: 10px;
  }
</style>

<div class="container">
  <h3 align="center">Пригласить участников</h3>
  <p align="center">Скопируйте ссылку ниже и отправьте её своим друзьям.</p>
  <p align="center">После перехода по ссылке, участники смогут создать карточки для участия самостоятельно.</p>
  <div class="styled-box">
    <input type="text" bind:value={$url} readonly>
    <button class="main-button" on:click={handleCopyToClipboard}>{#if $copied}Скопировано!{:else}Копировать{/if}</button>
  </div>
</div>
