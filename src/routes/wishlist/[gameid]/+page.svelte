<script lang='ts'>
   import { superForm } from 'sveltekit-superforms';
   import type { PageData, ActionData } from './$types';

   export let data: PageData;

   // Client API:
   const { form, errors, message } = superForm(data.form);

   let numGifts = 1; 

   const addParticipant = () => {
       if (numGifts < 10) {
           numGifts++; 
       }
   }

   const removeParticipant = () => {
       if (numGifts > 1) {
           numGifts--; 
       }
   }
</script>

<style>
</style>

<main class="container">
   <form method="POST" action="?/save_gifts" class='form-section'>
        <article class='title-section'>
            <h3>Пожелания к подарку</h3>
        </article>
       <p>Укажите подарки, которые хотели бы получить</p>
       <p>Организатор установил ограничение на сумму подарка в *сумма*.</p>
       <p>Учитывайте это ограничение при написании своего пожелания</p>
       <div class='center row'>
           {#each [...Array(numGifts).keys()] as index}
               <div class='wish-lists'>
                   Подарок №{index + 1}
                   <input class='input-style' type="text" placeholder="Названия подарка" name={`name${index}`} bind:value={$form[`name${index}`]} />
                   {#if $errors[`name${index}`]}
                       <small>{$errors[`name${index}`]}</small>
                   {/if}

               </div>
           {/each}
       </div>
       <div class='center small row'>
        <button type="button" class='primary-btn small' on:click={addParticipant}>Добавить еще подарок</button>
        <button type="button" class='primary-btn small' on:click={removeParticipant}>Скрыть подарок</button>
        <button type="submit" class='primary-btn small'>Далее</button>
       </div>   
       {#if $message}
           <div>{$message}</div>
       {/if}
   </form>
</main>
