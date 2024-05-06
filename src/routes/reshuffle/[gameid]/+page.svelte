
<script>

  import { page } from '$app/stores';

  const gameid = $page.params.gameid;

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
