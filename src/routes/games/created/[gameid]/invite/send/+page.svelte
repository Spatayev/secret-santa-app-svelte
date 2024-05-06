<script lang='ts'>
    import { superForm } from 'sveltekit-superforms';
    import type {PageData} from '../$types'

    export let data:PageData;

    // Client API:
    const { form, errors, message } = superForm(data.form);

    let numParticipants = 5; 

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

<section class="styled-box">
    <form method="POST" action="?/sender">
        <h5>Добавить участников</h5>
        <div>
            {#each [...Array(numParticipants).keys()] as index}
                <div>
                    Участник №{index + 1}
                    <input type="text" placeholder="Имя" name={`name${index}`} bind:value={$form[`name${index}`]} />
                    {#if $errors[`name${index}`]}
                        <small>{$errors[`name${index}`]}</small>
                    {/if}

                    <input type="text" placeholder="E-mail" name={`email${index}`} bind:value={$form[`email${index}`]} />
                    {#if $errors[`email${index}`]}
                        <small>{$errors[`email${index}`]}</small>
                    {/if}
                </div>
            {/each}
        </div>

        <button type="button" on:click={addParticipant}>Добавить еще участника</button>
        <button type="button" on:click={removeParticipant}>Скрыть участника</button>
        <button type="submit">Пригласить</button>

        {#if $message}
            <div>{$message}</div>
        {/if}
    </form>
</section>
