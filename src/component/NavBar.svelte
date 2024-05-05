<script>
	import { NAVBAR_MENU_START, NAVBAR_MENU_FINISH } from '$lib/data';
	import Logo from '$lib/logo.svg';
	export let isAcces;
</script>

<header class="navbar-container">
	<nav class="navbar">
		<div role="img" class="logo">
			<a href={'/'}><Logo/></a>
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
		gap: 25px;
	}
	.btn {
		font-size: 1.5rem;
		color: #ff6300;
		text-decoration: none;
		text-transform: uppercase;
		font-weight: bold;
		margin: 0 10px;
		padding: 5px 10px;
	}
	ul li a {
		position: relative;
		transition: all .5s;
	}

	.btn:hover{
		background-color: #ff6300;
		color: white
	}
	.btn:before{
		content:'';
		position: absolute;
		bottom: 12px;
		left: 12px;
		width: 12px;
		height: 12px;
		border: solid;
		border-width: 0 0 3px 3px;
		opacity: 0;
		transition: all 0.3s;
	}
	.btn:hover:before{
		opacity: 1;
		bottom: -8px;
		left: -8px
	}
	.btn:after{
		content:'';
		position: absolute;
		top: 12px;
		right: 12px;
		width: 12px;
		height: 12px;
		border: solid;
		border-width: 3px 3px 0 0;
		opacity: 0;
		transition: all 0.3s;
	}
	.btn:hover:after{
		opacity: 1;
		top: -8px;
		right: -8px
	}
</style>
