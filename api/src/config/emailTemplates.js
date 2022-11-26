export default {
  registration: {
    subject: 'Registration',
    template: ({ email, password }) => `<h1>Вас зарегистрировали на платформе Oggetto onboarding</h1>

<p>Для входа в систему используйте логин "${email}", пароль "${password}".</p>
<p>После входа в систему, Вы сможете сменить пароль</p>

<p>Это автоматически сгенерированное сообщение. Не отвечайте на него.</p>`,
  },
  potentialFriend: {
    subject: 'Potential friend',
    template: () => `<h1>Вам повезло!</h1>

<p>Скоро Вам напишет наш новый сотрудник!</p>
<p>Он совсем недавно присоединился к нашей команде и сейчас нуждается в помощи с адаптацией, мы просим вас уделить ему пару минут времени после работы или на обеденном перерыве =)</p>
<p>У вас наверняка найдутся общие темы. Кто знает, может быть через некоторое время вы станете товарищами.</p>

<p>Благодарим Вас за помощь в адаптации новых сотрудников!</p>

<p>Это автоматически сгенерированное сообщение. Не отвечайте на него.</p>`,
  },
};
