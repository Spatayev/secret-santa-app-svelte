<script lang="ts">
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
  </script>
  
  <main class='container'>
    
    <form class='form-section' method="POST">
        <article class='title-section'>
            <h3>Подопечный</h3>
        </article>
        <p>{data.result.gifteeEmail}</p>
        <p>{data.result.wishlistDescriptions}</p>
    </form>
</main>