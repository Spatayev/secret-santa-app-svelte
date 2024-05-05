<script lang="ts">
	import { applyAction } from '$app/forms';
	import NavBar from '../component/NavBar.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';
	export let data;
</script>

<NavBar isAcces={data.acces} />
<slot />
