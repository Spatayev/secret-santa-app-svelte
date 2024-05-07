
<script>

  import { page } from '$app/stores';

  const gameid = $page.params.gameid;

import { PUBLIC_BASE_URL, PUBLIC_language } from '$env/static/public';

  console.log('PUBLIC_BASE_URL');
  console.log(PUBLIC_BASE_URL);

  console.log('PUBLIC_language');
  console.log(PUBLIC_language);


  console.log($page.params);
</script>

<div class="container">
  <div class="styled-box">

    <form>
      <div class="grid-container">
        <h5 class="text-center">Жеребьевка. Название игры</h5>
        <p>Связаться с Организатором</p>
      </div>
 <div class="grid-container">
play ?
      </div>


      <div class="stack">
        <a href="/wishlist/{gameid}/my-giftee-wishlist">Узнать подопечного</a>
      </div>
    </form>
  </div>
</div>

<style>

</style>
