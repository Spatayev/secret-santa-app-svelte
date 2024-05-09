<script>
	import { NAVBAR_MENU_START, NAVBAR_MENU_FINISH } from '$lib/data';
	export let isAcces;
</script>

<header class="navbar-container">
	<nav class="navbar">
		<div role="img" class="logo">
			<a href={'/'}>logo</a>
		</div>
		<ul class="navbar-btns">
			{#if !isAcces}
				{#each NAVBAR_MENU_START as navbar}
					<li class="btn-list"><a href={`/${navbar.name}`} class="btn">{navbar.nameRu} </a></li>
				{/each}
			{:else}
				{#each NAVBAR_MENU_FINISH as navbar}
					{#if navbar.name === 'logout'}
						<li class="btn-list" ><a data-sveltekit-reload href={`/${navbar.name}`} class="btn">{navbar.nameRu} </a></li>
					{:else}
						<li class="btn-list"><a href={`/${navbar.name}`} class="btn">{navbar.nameRu}</a></li>
					{/if}
				{/each}
			{/if}
		</ul>
	</nav>
</header>

<style>
	
</style>
