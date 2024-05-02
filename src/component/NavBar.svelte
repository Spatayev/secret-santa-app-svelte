<script>
	import { NAVBAR_MENU_START, NAVBAR_MENU_FINISH } from '$lib/data';
	import Logo from '$lib/logo.svelte';
	export let isAcces;
</script>

<header class="navbar-container">
	<nav class="navbar">
		<div role="img" class="logo">
			<a href={'/'}><Logo /></a>
		</div>
		<ul class="navbar-btns">
			{#if !isAcces}
				{#each NAVBAR_MENU_START as navbar}
					<li class="btn-list"><a href={`/${navbar.name}`} class="btn">{navbar.nameRu} </a></li>
				{/each}
			{:else}
				{#each NAVBAR_MENU_FINISH as navbar}
					<li class="btn-list"><a href={`/${navbar.name}`} class="btn">{navbar.nameRu}</a></li>
				{/each}
			{/if}
		</ul>
	</nav>
</header>

<style>
	header {
		margin: 20px 100px;
	}
	.navbar {
		display: flex;
		justify-content: space-between;
		margin: 0, auto;
	}
	.navbar-btns {
		width: 50vw;
		list-style: none;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		gap: 20px;
	}
	.btn {
		font-size: 1.5rem;
		color: #ff6300;
		text-decoration: none;
		text-transform: capitalize;
		font-weight: bold;
	}
</style>
