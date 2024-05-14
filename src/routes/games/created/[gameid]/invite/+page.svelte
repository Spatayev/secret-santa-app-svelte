<script lang="ts">
	import { goto } from '$app/navigation';
</script>

<main class='container'>
	<section class='form-section'>
		<article class='title-section'>
			<h2>Добавить участников</h2>
		</article>
		<div class='center variants'><button class='primary-btn'>Создать свою карточку участника</button></div>
		<div class='center variants'><button class='primary-btn' on:click={() => {
					goto('invite/send');
				}}>Добавить участников вручную</button></div>
		<div class='center variants'>
			<button class='primary-btn'
				on:click={() => {
					goto('invite/link');
				}}>Пригласить по ссылке</button
			>
		</div>
	</section>
</main>
