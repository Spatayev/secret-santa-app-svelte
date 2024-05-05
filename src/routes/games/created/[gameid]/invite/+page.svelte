<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<section>
	<div>
		<h2>Добавить участников</h2>
	</div>
	<div><button>Создать свою карточку участника</button></div>
	<div><button on:click={() => {
				goto('invite/send');
			}}>Добавить участников вручную</button></div>
	<div>
		<button
			on:click={() => {
				goto('invite/link');
			}}>Пригласить по ссылке</button
		>
	</div>
</section>
