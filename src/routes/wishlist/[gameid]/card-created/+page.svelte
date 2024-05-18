<script lang='ts'>
  import type { PageData } from './$types';
  import SantaInSled from '$lib/santa-in-sled.svg?url'
  export let data: PageData;
  
</script>


<main class="container">
  <section class="form-section center">
    <article class='title-section'>
      <h3>Карточка участника создана!</h3>
    </article>
      <div class="content-box center">
        <img src={SantaInSled} alt="santa_thum" class='card-img'>
      </div>
    {#if data.isHost}
        <p>Ждем вашу жеребьевку</p>
    {:else}
        <p>Вам придет уведомление, как только Организатор проведет жеребьевку</p>
    {/if}
      
    <div class="center">
      <a href="/" class="primary-btn">На главную</a>
    </div>
  </section>
</main>

<style>
</style>
 