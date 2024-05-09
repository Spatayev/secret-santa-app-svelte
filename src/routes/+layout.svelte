<script lang="ts">
	import {onMount} from 'svelte'
	import NavBar from '../component/NavBar.svelte';
	import '../app.css';
	export let data;
</script>
<NavBar isAcces={data.acces} />
<slot />
