let formRandom = document.querySelector(".random-form");
let formInput = document.querySelector(".random-input");
let randomBtn = document.querySelector(".random-btn");
let refreshBtn = document.querySelector(".refresh-btn");
let textCounter = document.querySelector(".text-counter");
let randomResText = document.querySelector(".random-res-text");

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

userChance = 6;
textCounter.textContent = `Number of remaining attempts : ${userChance}`;

formRandom.addEventListener("submit", (evt) => {
  evt.preventDefault();
  userChance--;
  textCounter.textContent = `Number of remaining attempts : ${userChance}`;

  formInputValue = Number(formInput.value);
  if (formInputValue === 0) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Enter a number`;
    userChance = 6;
  } else if (userChance === 0) {
    formInput.disabled = true;
    randomBtn.setAttribute("disabled", "Stop");
    randomResText.classList.add("text-white", "bg-danger");
    randomResText.textContent = `Unfortunately, your chance has run out. Please try again`;
  } else if (randomNumber > formInputValue) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Bigger than the number you found`;
  } else if (randomNumber < formInputValue) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Smaller than the number you found`;
  } else if (formInputValue === randomNumber) {
    randomResText.classList.add("text-white", "bg-success");
    randomResText.textContent = `Congratulations. You won.`;
    formInput.disabled = true;
    randomBtn.setAttribute("disabled", "Stop");
  }
});

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});
