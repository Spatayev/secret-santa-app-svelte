<script lang="ts">
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
  </script>
  
  <main class='container'>
    
    <form class='form-section' method="POST">
        <article class='title-section'>
            <h3>Подопечный</h3>
        </article>
        <article class='account-info'>
            <h4>{data.result.gifteeEmail}</h4>
            <p>{data.result.wishlistDescriptions}</p>
        </article>
    </form>
</main>