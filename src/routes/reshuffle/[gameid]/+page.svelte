<script lang="ts">
	import { goto } from '$app/navigation';
  import type { ActionData } from './$types';
  export let form: ActionData;
</script>

<main class='container'>
  
  <form class='form-section' method="POST"> 
    <article class='title-section'>
      <h3>Провести жеребьевку</h3>
    </article> 
    <button type='submit' class='primary-btn'>
      Жербьевка
    </button>
    {#if form?.actionRes}
    <div class='center'>
      <p>{form?.actionRes}</p>
      <a class='primary-btn' href={`./${form?.gameid}/present`}>Узнать подопечного</a>
    </div>
      
    {/if}
    
  </form>
</main>