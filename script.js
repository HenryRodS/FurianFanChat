const chatBox = document.getElementById('chat-box');

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('msg');
  msg.innerHTML = `<strong class="${sender}">${sender === 'user' ? 'Você' : 'FURIA Bot'}:</strong> ${text}`;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById('user-input');
  const text = input.value.trim();
  if (!text) return;
  appendMessage('user', text);
  input.value = '';
  respondToMessage(text);
}

function respondToMessage(msg) {
  let response = "";
  switch (msg.toLowerCase()) {
    case "/agenda":
      response = "📅 Próximos jogos: 01/05 às 18h vs NAVI | 03/05 às 21h vs FaZe";
      break;
    case "/time":
      response = "👥 Escalação atual: arT, KSCERATO, yuurih, FalleN, chelo";
      break;
    case "/clip":
      response = "🎥 Últimos momentos: https://clips.twitch.tv/epic-furia";
      break;
    case "vamos furia":
      response = "🔥🔥 O time sente sua energia! VAMO FURIAAAA!";
      break;
    default:
      response = "🤖 Comando ou mensagem recebida! Continue torcendo pela FURIA!";
  }
  setTimeout(() => appendMessage('bot', response), 500);
}
