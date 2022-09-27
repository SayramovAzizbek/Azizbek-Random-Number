let formRandom = document.querySelector(".random-form");
let formInput = document.querySelector(".random-input");
let randomBtn = document.querySelector(".random-btn");
let refreshBtn = document.querySelector(".refresh-btn");
let textCounter = document.querySelector(".text-counter");
let randomResText = document.querySelector(".random-res-text");

const randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);

userChance = 6;
textCounter.textContent = `Number of remaining attempts : ${userChance}`;

formRandom.addEventListener("submit", (evt) => {
  evt.preventDefault();
  formInputValue = Number(formInput.value);

  if (formInputValue === 0 || isNaN(formInputValue)) return emptyInput();

  if (formInputValue === randomNumber) return winnerCase();

  userChance--;
  textCounter.textContent = `Number of remaining attempts : ${userChance}`;

  if (randomNumber > formInputValue) {
    biggerThanUserNumber();
  } else {
    smallerThanUserNumber();
  }

  if (userChance === 0) loseCase();

  // formInput.value = "";
});

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});

/**
 * Calls when user enters string or 0 number
 */
const emptyInput = () => {
  randomResText.classList.add("text-danger", "bg-info");
  randomResText.textContent = `Enter a number`;
  // userChance = 6;
  return;
};

/**
 * Calls when user enters bigger number than random number
 */
const biggerThanUserNumber = () => {
  randomResText.classList.add("text-danger", "bg-info");
  randomResText.textContent = `Bigger than the number you found`;
};

/**
 * Calls when user enters smaller number than random number
 */
const smallerThanUserNumber = () => {
  randomResText.classList.add("text-danger", "bg-info");
  randomResText.textContent = `Smaller than the number you found`;
};

/**
 * Calls when user spent all chances
 */
const loseCase = () => {
  formInput.disabled = true;
  randomBtn.setAttribute("disabled", "Stop");
  randomResText.classList.add("text-white", "bg-danger");
  randomResText.textContent = `Unfortunately, your chance has run out. Please try again. The answer was ${randomNumber}`;
  refreshBtn.removeAttribute("disabled");
};

/**
 * Calls when user wins
 */
const winnerCase = () => {
  randomResText.classList.remove("text-danger", "bg-info");
  randomResText.classList.add("text-white", "bg-success");
  randomResText.textContent = `Congratulations. You won.`;
  formInput.disabled = true;
  randomBtn.setAttribute("disabled", "Stop");
  refreshBtn.removeAttribute("disabled");
};
