<script>
  import { onMount } from 'svelte';

  let participants = [{ name: '', email: '' }];
  let ID = '';
  let access = '';

  onMount(() => {
    const params = new URLSearchParams(window.location.search);
    ID = params.get('game_id') || '';

  });

  const handleAddParticipant = () => {
    participants = [...participants, { name: '', email: '' }];
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    participants[index][name] = value;
    participants = [...participants];
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const serializedFormData = Object.fromEntries(formData.entries());
    console.log(serializedFormData);
  };
</script>

<style>

</style>

<section class="styled-box">
  <form on:submit={handleSubmit}>
    <h5>Добавить участников</h5>
    {#each participants as participant, index}
      <div>
        Участник №{index + 1}
        <input type="text" placeholder="Имя" name="name" value={participant.name} on:input={(e) => handleInputChange(index, e)} />
        <input type="text" placeholder="E-mail" name="email" value={participant.email} on:input={(e) => handleInputChange(index, e)} />
      </div>
    {/each}
    <input type="hidden" name="gameId" value={ID} />

    <button type="button" on:click={handleAddParticipant}>Добавить еще участника</button>
    <button type="submit">Пригласить</button>
  </form>
</section>
