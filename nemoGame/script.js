const boxes = ['Nemo', '', '', '', '', '', '', '', '', ''];
let attempts = 0;
let nemoFound = false;

document.getElementById('startButton').addEventListener('click', startGame);

function startGame() {
  attempts = 0;
  nemoFound = false;
  const gameContainer = document.getElementById('gameContainer');
  gameContainer.innerHTML = '';
  shuffleArray(boxes);
  boxes.forEach(function (item) {
    const box = document.createElement('div');
    box.className = 'box';
    box.addEventListener('click', function () {
      if (attempts >= 6 || nemoFound) return;
      attempts++;
      box.classList.add(item === 'Nemo' ? 'found' : 'not-nemo');
      if (item === 'Nemo') {
        nemoFound = true;
        alert(`Congratulations! You found Nemo in ${attempts} attempts.`);
      }
      updateAttempts();
    });
    gameContainer.appendChild(box);
  });
  updateAttempts();
}

function updateAttempts() {
  document.getElementById('attempts').textContent = `Attempts: ${attempts}/6`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
