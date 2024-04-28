<script>
	import { goto } from '$app/navigation';
	import { MAIN_PAGE } from '$lib/data';
</script>

<main>
	<section>
		<div>
			<h1>{MAIN_PAGE.header}</h1>
		</div>
		<div>
			<p>{MAIN_PAGE.title}</p>
		</div>
	</section>
	<div>
		<button
			on:click={() => {
				goto('/create');
			}}
		>
			{MAIN_PAGE.buttonCreate}
		</button>
		<button>
			{MAIN_PAGE.buttonShuffle}
		</button>
	</div>
</main>
