<!-- <script lang='ts'>
    import type { PageData } from './$types';
    import { superForm } from 'sveltekit-superforms';
    export let data: PageData
    const { form, errors } = superForm(data.form);
</script> -->

<main class='container'>
    <section>
        <form class='form-section' method="POST" action={"?/contact"}>
            <!-- <article class='account-info'>
                <h4>{data.res.login}</h4>
                <p>{data.res.email}</p>
            </article> -->
            <article class='title-section'>
			    <h3>Личные данные</h3>
		    </article>
            <label for="userName">Ваш Логин</label>
            <input type="text" name='userName' >
            <label for="password" >Ваш Email</label>
            <input type="email" name='email' >
            <label for="phoneNumber">Ваш Номер</label>
            <input type="text" name='phoneNumber'>
            <button type='submit'>Сохранить</button>
        </form>
    </section>
</main>