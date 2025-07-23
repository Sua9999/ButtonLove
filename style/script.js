const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "Chồng yêu vợ 💕", "Chồng thương vợ 🤗", "I Love You 🥰", "Yêu vợ Quin nhất",
  "Vợ chồng mình cứ thế thôi hẹ hẹ 💫", "❤️ Gửi yêu thương ❤️", "Luôn bên chồng nhé 😊",
  "Love You 3000 💖", "Cảm ơn vì vợ đã chọn yêu chồng 🌸",
  "Vợ là một món quà 🎁", "Trái tim này là của vợ 💘",
  "Vợ làm thế giới này đẹp hơn 💐", "Love You In Every Universe",
  "Vợ là duy nhất 💞", "Wo ai Ni❤️",
  "Chồng nhớ vợ nhiều 🌈", "You Are My Everything ❤️",
  "Yêu vợ không cần lý do 🏡", "Vợ là lý do chồng luôn mỉm cười 😘",
  "Chồng yêu vợ vì vợ là chính vợ ✨"
];

function showRandomMessage(event) {
  sound.play();
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[Math.floor(Math.random() * messages.length)];

  const directions = [0, Math.PI/4, Math.PI/2, 3*Math.PI/4, Math.PI, 5*Math.PI/4, 3*Math.PI/2, 7*Math.PI/4];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  const distance = 200;
  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  const rect = event.currentTarget.getBoundingClientRect();
  msg.style.left = rect.left + rect.width / 2 + "px";
  msg.style.top = rect.top + rect.height / 2 + "px";
  msg.style.transform = "translate(-50%, -50%)";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}
