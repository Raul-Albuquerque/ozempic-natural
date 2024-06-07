function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função para atualizar o span com um novo número aleatório
function updateRandomNumber() {
  const span = document.getElementById('random-number');
  const randomNumber = getRandomNumber(1624, 1787);
  span.textContent = randomNumber;
}

// Chama a função updateRandomNumber a cada 4 segundos (4000 ms)
setInterval(updateRandomNumber, 15000);

// Chama a função imediatamente para que o número inicial não seja sempre 812
updateRandomNumber();