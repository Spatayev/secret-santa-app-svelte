<script lang="ts">
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
  </script>
  
  <main class='container'>
    <form class='form-section' method="POST">
      <p>{data.result.gifteeEmail}</p>
      <p>{data.result.wishlistDescriptions}</p>
    </form>
</main>