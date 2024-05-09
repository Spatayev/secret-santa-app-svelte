import { z } from 'zod';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';
import { message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
const newPassSchema = z.object({
	password: z.string().min(4)
});
export const actions = {
	reset: async ({ params, cookies }) => {
		// TODO log the user in
	}
} satisfies Actions;
