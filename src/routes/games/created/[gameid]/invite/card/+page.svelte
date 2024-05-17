<script lang='ts'>
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms';
    export let data: PageData
    const { form, errors } = superForm(data.form);
</script>

<main class='container'>
    <section>
        <form class='form-section' method="POST" action={"?/contact"}>
            <article class='title-section'>
			    <h3>Контактные данные</h3>
		    </article>
            <label for="userName">Ваш Логин</label>
            <input class='input-style' type="text" name='userName' placeholder={data.res.login}>
            <label for="password" >Ваш Email</label>
            <input class='input-style' type="email" name='email' placeholder={data.res.email}>
            <label for="phoneNumber">Ваш Номер</label>
            <input type="text" name='phoneNumber' class={$errors.phoneNumber ? 'error-input input-style' : 'input-style'}>
            {#if $errors.phoneNumber}
                <small>{$errors.phoneNumber}</small>
            {/if}
            <div class='center'><button type='submit' class='primary-btn'>Сохранить</button></div>
        </form>
    </section>
</main>