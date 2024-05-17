<script lang="ts">
  import type { PageData, ActionData } from './$types';
  export let data: PageData;
  export let form: ActionData;
</script>

<main class='container'>
  <form class='form-section' method="POST">
    <p>{data.result.gifteeEmail}</p>
    <p>{data.result.wishlistDescriptions}</p>
    
    <button type='submit' >
      Жербьевка
    </button>
    <p>{form?.actionRes}</p>
  </form>
</main>