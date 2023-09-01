const slider = document.getElementById('slider');
const guessDisplay = document.getElementById('guess');
const buttonContainer = document.getElementById('button-container');
const resultDisplay = document.getElementById('result');
const attemptsDisplay = document.getElementById('attempts');
const buttons = document.querySelectorAll('.number-button');
const maxAttempts = 5;
let remainingAttempts = maxAttempts;
const randomNumber = Math.floor(Math.random() * 10) + 1;

function setGuess(number) {
    slider.value = number;
    guessDisplay.textContent = number;
}
function checkGuess(guess) {
    const difference = Math.abs(guess - randomNumber);

    if (guess === randomNumber) {
        resultDisplay.textContent = '🥳 Congratulations! You guessed correctly!';
        resultDisplay.style.color = 'green';
        buttons[guess - 1].classList.add('correct');
    } else if (guess < randomNumber) {
        resultDisplay.textContent = '😓 Oops! The guessed number is Smaller';
        resultDisplay.style.color = 'orange';
        buttons[guess - 1].classList.add('nearest');
    } else {
        resultDisplay.textContent = '🤯 Oops! The guessed number is Bigger ';
        resultDisplay.style.color = 'red';
        buttons[guess - 1].classList.add('wrong');
    }
    remainingAttempts--;
    attemptsDisplay.textContent = `Remaining attempts: ${remainingAttempts}`;

    if (remainingAttempts === 0) {
        slider.disabled = true;
        buttonContainer.innerHTML = '<p>No more attempts left!</p>';
    }
}
slider.addEventListener('input', () => {
    guessDisplay.textContent = slider.value;
});
slider.addEventListener('change', () => {
    const guess = parseInt(slider.value);
    checkGuess(guess);
});