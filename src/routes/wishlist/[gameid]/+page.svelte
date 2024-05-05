<script>
    import { superForm } from 'sveltekit-superforms';

    export let data;

    // Client API:
    const { form, errors, message } = superForm(data.form);

    let numGifts = 10; 

    const addParticipant = () => {
        if (numGifts < 10) {
            numGifts++; 
        }
    }

    const removeParticipant = () => {
        if (numGifts > 2) {
            numGifts--; 
        }
    }
</script>

<style>
</style>

<section class="styled-box">
    <form method="POST" action="?/save_gifts">
          <h5>Пожелания к подарку</h5>
		  <p>Укажите подарки, которые хотели бы получить</p>
		  <p>Организатор установил ограничение на сумму подарка в *сумма*.</p>
		  <p>Учитывайте это ограничение при написании своего пожелания</p>

        <div>
            {#each [...Array(numGifts).keys()] as index}
                <div>
                    Подарок №{index + 1}
                    <input type="text" placeholder="Описание" name={`name${index}`} bind:value={$form[`name${index}`]} />
                    {#if $errors[`name${index}`]}
                        <small>{$errors[`name${index}`]}</small>
                    {/if}

                </div>
            {/each}
        </div>

        <button type="button" on:click={addParticipant}>Добавить еще подарок</button>
        <button type="button" on:click={removeParticipant}>Скрыть подарок</button>
        <button type="submit">Далее</button>

        {#if $message}
            <div>{$message}</div>
        {/if}
    </form>
</section>
