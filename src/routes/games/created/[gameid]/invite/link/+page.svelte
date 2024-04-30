<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
	console.log(data);
</script>

<section>
	<label for="invite">
		<input type="url" name="invite" value={data.res.link} readonly />
	</label>
	<div>
		<button
			on:click={() => {
				goto('./card');
			}}
		>
			Создать свою карточку
		</button>
	</div>
	<div>
		<button
			on:click={() => {
				goto('/');
			}}
		>
			На главную страницу
		</button>
	</div>
</section>
