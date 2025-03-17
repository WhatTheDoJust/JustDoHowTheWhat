const higherButton = document.getElementById('higher-button');
const lowerButton = document.getElementById('lower-button');
const zeroNumberSection = document.getElementById('zero-number-section');
const oneNumberSection = document.getElementById('one-number-section');
const rollZeroButton = document.getElementById('roll-zero-button');
const rollOneButton = document.getElementById('roll-one-button');
const playAgainButton = document.getElementById('play-again-button');
const zeroNumberSpan = document.getElementById('zero-number');
const oneNumberSpan = document.getElementById('one-number');

// Disable Higher and Lower buttons after one is clicked
function disableInitialButtons() {
  higherButton.disabled = true;
  lowerButton.disabled = true;
}

// Initial event listeners for higher/lower choice
higherButton.addEventListener('click', () => {
  disableInitialButtons();
  zeroNumberSection.classList.remove('hidden'); // Show zero number section
});

lowerButton.addEventListener('click', () => {
  disableInitialButtons();
  zeroNumberSection.classList.remove('hidden'); // Show zero number section
});

// Event listener for the first roll (0)
rollZeroButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 101); // 0 to 100
  zeroNumberSpan.textContent = randomNumber;
  rollZeroButton.disabled = true;
  oneNumberSection.classList.remove('hidden'); // Show number 1
});

// Event listener for the second roll (1)
rollOneButton.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1; // 1 to 100
  oneNumberSpan.textContent = randomNumber;
  rollOneButton.disabled = true;
  playAgainButton.classList.remove('hidden'); // Show play again button
});

// Event listener for Play Again button
playAgainButton.addEventListener('click', () => {
  // Reset the page by reloading it
  location.reload();
});
