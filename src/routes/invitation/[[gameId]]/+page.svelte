<!-- page.svelte -->
<script context="module">

  import Button1 from './Button1.svelte';
  import Button2 from './Button1.svelte';
  import Button3 from './Button1.svelte';

</script>


<section class="btnBox">

  <Button1 name="Добавить участников" url_route="invitation_participiant/game_id" />
  <Button2 name="Создать свою карточку участников" url_route="route2" />
  <Button3 name="Пригласить по ссылке" url_route="invitation_link/game_id" />

</section>
