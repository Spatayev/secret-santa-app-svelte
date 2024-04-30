<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<section>
	<div>
		<h2>Игра создана</h2>
	</div>
	<div role="img"></div>
	<div>
		<h4>Пока что никого нет</h4>
	</div>
	<div>
		<button
			on:click={() => {
				goto('created/invite');
			}}>Добавить участников</button
		>
	</div>
</section>
