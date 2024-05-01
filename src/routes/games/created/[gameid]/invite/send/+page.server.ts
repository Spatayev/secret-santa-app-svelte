/** @type {import('./$types').Actions} */


import { fail, message, superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { z } from 'zod';


// Define outside the load function so the adapter can be cached
const schema = z.object({});

/*

const schema = z.object({
  name0: z.string().min(2),
  email0: z.string().email(),
  name1: z.string().min(2),
  email1: z.string().email()
});

*/

export const load = async (event) => {


  console.log('emailemailemail' + event);
  console.log(event.request);

  const form = await superValidate(zod(schema));

  // Always return { form } in load functions
  return { form };
};

export const actions = {
  sender: async (request) => {
    console.log('sendersendersender');
    const formData = (request.cookies.getAll);
    console.log(formData);


    const form = await superValidate(request, zod(schema));
    console.log(form);
    
    if (!form.valid) {
      return fail(400, { form });
    }

    let successMessage = '';
    let errorMessage;
    console.log('request');
    console.log(request.locals.token);

    try {
      const response = await fetch(`http://51.107.14.25:8080/invitations/${request.params.gameid}/send`, {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${request.locals.token}`,
        },
        body: JSON.stringify(form.data)

      });

      if (!response.ok) {
        const badRes = await response.text();
        return message(form, badRes);
      }

      if (response.headers.get('Content-Type') === 'application/json') {
        const responseBody = await response.json();
        if (response.status === 200) {
          successMessage = 'Данные успешно отправлены на сервер';
        } else if (response.status === 202) {
          successMessage = 'Вы уже ';
          successMessage = 'Message:' + responseBody.message;
        }
      } else {
        const responseData = await response.text();
        successMessage = '' + responseData;
      }
    } catch (error) {
      errorMessage = error;
      errorMessage = 'Ошибка:' + errorMessage;
    }

    return { successMessage, errorMessage };
  }
};
