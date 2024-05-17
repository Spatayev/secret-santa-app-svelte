<script lang="ts">
    import type {PageData} from './$types'
       export let data:PageData;
   </script>
   
   <main class="container">
   <section class='form-section'>
      {#if data.data}
      {#each data.data as my}
      <ul>
         <li>
            my description {my?.description}
         </li>
         <li>
          my email {my?.email}
         </li>
      </ul>
     {/each}
      {/if}
   </section>
      
   </main>
   
   
   <style>
   li{
      margin-right: 3rem;
   }
   </style>
 