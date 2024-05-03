<script>
    import { superForm } from 'sveltekit-superforms';

    export let data;

    // Client API:
    const { form, errors, message } = superForm(data.form);


</script>

<style>

</style>

<section class="styled-box">
    <form method="POST" action="?/sender">
        <h5>Добавить участников</h5>
        <div>
            Участник №{1}
            <input type="text" placeholder="Имя" name={`name${0}`} bind:value={$form.name0} />
            {#if $errors.name0}
            <small>{$errors.name0}</small>
            {/if}

            <input type="text" placeholder="E-mail" name={`email${0}`} bind:value={$form.email0}  />
            {#if $errors.email0}
            <small>{$errors.email0}</small>
            {/if}

            Участник №{2}
            <input type="text" placeholder="Имя" name={`name${1}`} bind:value={$form.name1} />
            {#if $errors.name1}
            <small>{$errors.name1}</small>
            {/if}

            <input type="text" placeholder="E-mail" name={`email${1}`} bind:value={$form.email1}  />
            {#if $errors.email1}
            <small>{$errors.email1}</small>
            {/if}

            Участник №{3}
            <input type="text" placeholder="Имя" name={`name${2}`} bind:value={$form.name2} />
            {#if $errors.name2}
            <small>{$errors.name2}</small>
            {/if}

            <input type="text" placeholder="E-mail" name={`email${2}`} bind:value={$form.email2}  />
            {#if $errors.email2}
            <small>{$errors.email2}</small>
            {/if}


            Участник №{4}
            <input type="text" placeholder="Имя" name={`name${3}`} bind:value={$form.name3} />
            {#if $errors.name3}
            <small>{$errors.name3}</small>
            {/if}

            <input type="text" placeholder="E-mail" name={`email${3}`} bind:value={$form.email3}  />
            {#if $errors.email3}
            <small>{$errors.email3}</small>
            {/if}


            Участник №{5}
            <input type="text" placeholder="Имя" name={`name${4}`} bind:value={$form.name4} />
            {#if $errors.name4}
            <small>{$errors.name4}</small>
            {/if}

            <input type="text" placeholder="E-mail" name={`email${4}`} bind:value={$form.email4}  />
            {#if $errors.email4}
            <small>{$errors.email4}</small>
            {/if}



        </div>

        <button type="button">Добавить еще участника</button>
        <button type="submit">Пригласить</button>

        {#if $message}
        <div>{$message}</div>
        {/if}
    </form>
</section>
