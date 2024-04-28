<script>
	import { CREATE_PAGE } from '$lib/data';
	export let data;
</script>

<main>
	<section>
		<div>
			<h1>
				{CREATE_PAGE.header}
			</h1>
		</div>
		<div>
			{data.res}
		</div>
		<div>
			<button>{CREATE_PAGE.buttonCreate}</button>
		</div>
	</section>
</main>
