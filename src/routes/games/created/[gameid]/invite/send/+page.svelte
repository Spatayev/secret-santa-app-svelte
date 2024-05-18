<script lang='ts'>
    import { superForm } from 'sveltekit-superforms';
    import type {PageData} from '../$types'

    export let data:PageData;

    // Client API:
    const { form, errors, message } = superForm(data.form);

    let numParticipants = 1; 

    const addParticipant = () => {
        if (numParticipants < 5) {
            numParticipants++; 
        }
    }

    const removeParticipant = () => {
        if (numParticipants > 2) {
            numParticipants--; 
        }
    }
</script>

<style>
</style>

<main class="container">
    <form method="POST" action="?/sender" class='form-section'>
        <article class='title-section'>
            <h3>Добавить участников</h3>
          </article> 
        <div>
            {#each [...Array(numParticipants).keys()] as index}
                <div>
                    Участник №{index + 1}
                    <input type="text" placeholder="Имя" name={`name${index}`} class='input-style' bind:value={$form[`name${index}`]} />
                    {#if $errors[`name${index}`]}
                        <small>{$errors[`name${index}`]}</small>
                    {/if}

                    <input type="text" placeholder="E-mail" name={`email${index}`} class='input-style' bind:value={$form[`email${index}`]} />
                    {#if $errors[`email${index}`]}
                        <small>{$errors[`email${index}`]}</small>
                    {/if}
                </div>
            {/each}
        </div>
        <div class='center small row'>
            <button type="button" on:click={addParticipant} class='primary-btn small'>Добавить еще участника</button>
            <button type="button" on:click={removeParticipant} class='primary-btn small'>Скрыть участника</button>
            <button type="submit" class='primary-btn small'>Пригласить</button>
        </div>
        {#if $message}
            <div>{$message}</div>
        {/if}
    </form>
</main>
