  

<script lang="ts">
    import type {PageData} from './$types'
       export let data:PageData;
       data.data
   </script>
   
   <div class="center">
   
      {#if data.data}
    
      <ul>
         <li>
            gifteeEmail  {data.data.gifteeEmail}
         </li>
         <li>
           wishlistDescriptions: {data.data.wishlistDescriptions}
         </li>
      </ul>
      {/if}
   </div>
   
   
   <style>
   li{
      margin-right: 3rem;
   }
   </style>
    
<!-- 
<script lang="ts">
    import type {PageData} from './$types'
       export let data:PageData;
    (data.data?.map(mc => mc?.description))
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
    -->