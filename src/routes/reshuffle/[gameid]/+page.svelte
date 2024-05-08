
<script>
	import { superForm } from 'sveltekit-superforms';

	export let data;

	// Client API:
	const { form, errors, message } = superForm(data.form);

  import { page } from '$app/stores';

  const gameid = $page.params.gameid;

import { PUBLIC_BASE_URL, PUBLIC_language } from '$env/static/public';

  console.log('PUBLIC_BASE_URL');
  console.log(PUBLIC_BASE_URL);

  console.log('PUBLIC_language');
  console.log(PUBLIC_language);


  console.log($page.params);

  let ShuffleStarted = false;
  let showUsers = false;
  let isAuthor = false;

// https://github.com/wobsoriano/svelte-sonner
  import { Toaster, toast } from 'svelte-sonner'


</script>

<div class="container">

      <div>
        <h5 class="text-center">Жеребьёвка.</h5>
        <p>Связаться с Организатором</p>
      </div>


      <div class="stack">
        <a href="/wishlist/{gameid}/my-giftee-wishlist">Узнать подопечного</a>
      </div>



	  <form method="POST" action="?/start_game">




		<div> Проверку на автора ввести и минимум на двоих игроков
			<button type="submit">{ShuffleStarted ? "Идёт жеребьевка" : "Начать жеребьевку"}</button>
		</div>

            
		{#if $message}
			<div>{$message}</div>
		{/if}


    </form>


	  <form method="POST" action="?/show_all_user">




		<div> Проверку на автора ввести и минимум на двоих игроков
			<button type="submit">Показать всех игроков</button>
		</div>

            
		{#if $message}
			<div>{$message}</div>
		{/if}


    </form>




<button on:click={() => toast.success('Нажал My first toast')}>
  Нажми получи ответ
</button>

<button on:click={() => toast.error('Нажал My Error toast')}>
  Нажми получи ошибочный ответ
</button>
<Toaster richColors  />

  </div>

<style>

</style>
