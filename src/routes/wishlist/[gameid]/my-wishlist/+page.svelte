<script lang="ts">
    import type {PageData} from './$types'
       export let data:PageData;
   </script>
   
   <div class="center">
   
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
   </div>
   
   
   <style>
   li{
      margin-right: 3rem;
   }
   </style>
 