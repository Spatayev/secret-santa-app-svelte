/** @type {import('./$types').Actions} */

export const actions = {
    sender: async (participantsData) => {
        let successMessage = '';
        let errorMessage;
      
        try {
          const response = await fetch(`http://51.107.14.25:8080/invitations/${participantsData.gameId}/send`, {
            method: 'POST',
            headers: {
              'accept': '*/*',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${participantsData.access}`,
            },
            body: JSON.stringify([{
              name: participantsData.name,
              email: participantsData.email,
            }]),
          });
      
          if (!response.ok) {
            errorMessage = await response.text() || 'Ошибка при отправке данных на сервер';
            throw new Error(errorMessage);
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
