<!-- Button1.svelte -->
<script>
  import { goto } from '$app/navigation';
	export let name;
	export let url_route;

  function handleClick(url_route1) {
    goto('/' + url_route1);
  }


</script>

<button on:click={ handleClick( url_route ) }>{name}</button>
