export default {
  registration: {
    subject: 'Registration',
    template: ({ email, password }) => `<h1>Вас зарегистрировали на платформе Oggetto onboarding</h1>

<p>Для входа в систему используйте логин "${email}", пароль "${password}".</p>
<p>После входа в систему, вы сможете сменить пароль</p>

<p>Это автоматически сгенерированное сообщение. Не отвечайте на него.</p>`,
  },
};
