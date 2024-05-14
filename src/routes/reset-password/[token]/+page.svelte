<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
    import type { PageData, ActionData } from './$types';
    export let data: PageData;
    const {form, message, errors, enhance} = superForm(data.form)
</script>

<main class='container'>
    <form class='form-section' method="POST" action='?/reset' use:enhance >
        <article class='title-section'>
            <h3>Восстановление пароля</h3>
        </article>
        <label for="password">Введите новый пароль</label>
        <input class={$errors.newPassword ? 'error-input input-style' : 'input-style'} type="password" name='password' bind:value={$form.newPassword}>
        {#if $errors.newPassword}
				<small>{$errors.newPassword}</small>
			{/if}
        <label for="checkpass">Повторите пароль</label>
        <input class={$errors.confirmPassword ? 'error-input input-style' : 'input-style'} type="password" name='checkpass' bind:value={$form.confirmPassword}>
        {#if $errors.confirmPassword}
				<small>{$errors.confirmPassword}</small>
			{/if}
        {#if !($form.confirmPassword === $form.newPassword)}
            <div>Пароли не совпадают</div>
        {/if}
        <div class = 'center'>
			<button disabled = {!($form.confirmPassword === $form.newPassword)} class={!($form.confirmPassword === $form.newPassword)?'disabled': 'primary-btn'} type="submit">Подтвердить</button>
		</div>
        {#if $message}
		    <div>{$message}</div>
	    {/if}
    </form>
</main>