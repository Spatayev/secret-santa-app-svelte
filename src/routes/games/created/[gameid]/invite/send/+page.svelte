<script>
    import { onMount } from 'svelte';
    import { superForm } from 'sveltekit-superforms';

    export let data;

    // Client API:
    const { form, errors, message } = superForm(data.form);

    let participants = [{ name: '', email: '' }];



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
    <form method="POST" action="?/sender">
        <h5>Добавить участников</h5>
        {#each participants as participant, index}
        <div>
            Участник №{index + 1}
            <input type="text" placeholder="Имя" name={`name${index}`} value={participant.name} on:input={(e)=>
            handleInputChange(index, e)} />
            {#if $errors.name}
            <small>{$errors.name}</small>
            {/if}

            <input type="text" placeholder="E-mail" name={`email${index}`} value={participant.email} on:input={(e)=>
            handleInputChange(index, e)} />
            {#if $errors.email}
            <small>{$errors.email}</small>
            {/if}
        </div>
        {/each}

        <button type="button" on:click={handleAddParticipant}>Добавить еще участника</button>
        <button type="submit">Пригласить</button>

        {#if $message}
        <div>{$message}</div>
        {/if}
    </form>
</section>
