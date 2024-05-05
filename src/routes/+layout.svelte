<script lang="ts">
	import NavBar from '../component/NavBar.svelte';
	import type { LayoutData } from './$types';
	export let data;
</script>

<NavBar isAcces={data.acces} />
<slot />
