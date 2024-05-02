<script lang="ts">
	import { goto } from '$app/navigation';
	export let data;
</script>

<main class="container">
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
				goto('/games/created/' + data.gameid + '/invite');
			}}>Добавить участников</button
		>
	</div>
</main>
