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
            <input type="text" name='newLogin' placeholder={data.res.login}>
            <label for="newEmail">Ваш E-mail</label>
            <input type="email" name='newEmail' placeholder={data.res.email}>
            <button type='submit'>Сохранить</button>
        </form>
    </section>
</main>