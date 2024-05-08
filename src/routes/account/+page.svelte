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
            <label for="login">Ваше Имя</label>
            <input type="text" name='login' placeholder={data.res.login}>
            <label for="email">Ваш E-mail</label>
            <input type="email" name='email' placeholder={data.res.email}>
        </form>
        <form class='form-section' method="POST" action='?/password'>
            <article class='title-section'>
                <h3>Пароль</h3>
            </article>
            <label for="password">Новый пароль</label>
            <input type="password" name='password'>
            <button type='submit'>Сохранить</button>
        </form>
    </section>
</main>