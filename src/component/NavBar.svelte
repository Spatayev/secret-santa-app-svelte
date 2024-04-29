<script>
	import { NAVBAR_MENU_START, NAVBAR_MENU_FINISH } from '$lib/data';
	export let isAcces;
</script>

<header>
	<nav>
		{#if !isAcces}
			{#each NAVBAR_MENU_START as navbar}
				<a href={`/${navbar.name}`}>{navbar.nameRu}</a>
			{/each}
		{:else}
			{#each NAVBAR_MENU_FINISH as navbar}
				<a href={`/${navbar.name}`}>{navbar.nameRu}</a>
			{/each}
		{/if}
	</nav>
</header>
