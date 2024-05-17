
<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
 import type {PageData} from './$types'
	export let data:PageData;

	// Client API:
	const { form, errors, message } = superForm(data.form);

  import { page } from '$app/stores';

  const gameid = $page.params.gameid;

// import { PUBLIC_BASE_URL, PUBLIC_language } from '$env/static/public';

  console.log('PUBLIC_BASE_URL');
  // console.log(PUBLIC_BASE_URL);

  console.log('PUBLIC_language');
  // console.log(PUBLIC_language);


  console.log($page.params);

  let ShuffleStarted = false;
  let showUsers = false;
  let isAuthor = false;

// https://github.com/wobsoriano/svelte-sonner
 /* import { Toaster, toast } from 'svelte-sonner'

<button on:click={() => toast.success('Нажал My first toast')}>
  Нажми получи ответ
</button>

<button on:click={() => toast.error('Нажал My Error toast')}>
  Нажми получи ошибочный ответ
</button>
<Toaster richColors  />
*/


</script>

<div class="container">

      <div>
        <h5 class="text-center">Жеребьёвка.</h5>
        <p>Связаться с Организатором</p>
      </div>
      <div class='players-card'>
        <h4>Жеребьёвка.</h4>
               <p>Связаться с Организатором</p>
      
      </div>

      <div class="stack">
        <a href="/wishlist/{gameid}/my-giftee-wishlist">Узнать подопечного</a>
      </div>



	  <form method="POST" action="?/start_game">

			
			<input type="hidden" name="inviter_id" value="12345" />
			{#if $errors.inviter_id}
				<small>{$errors.inviter_id}</small>
			{/if}


		<div> Проверку на автора ввести и минимум на двоих игроков
			<button type="submit">{ShuffleStarted ? "Идёт жеребьевка" : "Начать жеребьевку"}</button>
		</div>

            
		{#if $message}
			<div>{$message}</div>
		{/if}


    </form>







  </div>

<style>

</style>
