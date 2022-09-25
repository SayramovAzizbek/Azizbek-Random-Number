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

  if (formInputValue === 0 || isNaN(formInputValue)) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Enter a number`;
    userChance = 6;co
    return;
  }

  userChance--;
  textCounter.textContent = `Number of remaining attempts : ${userChance}`;

  if (userChance === 0) {
    formInput.disabled = true;
    randomBtn.setAttribute("disabled", "Stop");
    randomResText.classList.add("text-white", "bg-danger");
    randomResText.textContent = `Unfortunately, your chance has run out. Please try again. The answer was ${randomNumber}`;
    refreshBtn.removeAttribute("disabled");
  } else if (randomNumber > formInputValue) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Bigger than the number you found`;
  } else if (randomNumber < formInputValue) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Smaller than the number you found`;
  } else if (formInputValue === randomNumber) {
    randomResText.classList.remove("text-white", "bg-info");
    randomResText.classList.add("text-white", "bg-success");
    randomResText.textContent = `Congratulations. You won.`;
    formInput.disabled = true;
    randomBtn.setAttribute("disabled", "Stop");
    refreshBtn.removeAttribute("disabled");
  }
});

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});
