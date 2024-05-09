<script lang="ts">
	import { page } from '$app/stores';
</script>

<main class='container'>
    <section class='form-section'>
        <article class='title-section'>
			<h3>Ошибка страницы</h3>
		</article>
        <h1>Ошибка страницы</h1>
        <p>Статус ошибки: {$page.status}</p>
        <p>Об ошибке: {$page.error.message}</p>
    </section>
</main>
