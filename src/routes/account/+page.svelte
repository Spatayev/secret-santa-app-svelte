<script lang='ts'>
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms';
    export let data: PageData
    const { form, errors } = superForm(data.form);
</script>

<main class='container'>
    <section>
        <form class='form-section' method="POST" action='?/change'>
            <article class='account-info'>
                <h4>{data.res.login}</h4>
                <p>{data.res.email}</p>
            </article>
            <article class='title-section'>
			    <h3>Личные данные</h3>
		    </article>
            <label for="newLogin">Ваше Имя</label>
            <input class={$errors.newLogin ? 'error-input input-style' : 'input-style'} type="text" name='newLogin' value={data.res.login}>
            {#if $errors.newLogin}
			    <small>{$errors.newLogin}</small>
		    {/if}
            <label for="newEmail">Ваш E-mail</label>
            <input class={$errors.newEmail ? 'error-input input-style' : 'input-style'} type="email" name='newEmail' value={data.res.email}>
            {#if $errors.newEmail}
			    <small>{$errors.newEmail}</small>
		    {/if}
            <div class="center">
                <button class='primary-btn' type='submit'>Сохранить</button>
            </div>
            
        </form>
    </section>
</main>