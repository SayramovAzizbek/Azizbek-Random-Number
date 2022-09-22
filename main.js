let formRandom = document.querySelector(".random-form");
let formInput = document.querySelector(".random-input");
let randomBtn = document.querySelector(".random-btn");
let refreshBtn = document.querySelector(".refresh-btn");
let textCounter = document.querySelector(".text-counter");
let randomResText = document.querySelector(".random-res-text");

const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);

userChance = 6;
textCounter.textContent = `Qolgan urunishlar soni : ${userChance}`;

formRandom.addEventListener("submit", (evt) => {
  evt.preventDefault();
  userChance--;
  textCounter.textContent = `Qolgan urunishlar soni : ${userChance}`;
  formInputValue = Number(formInput.value);
  //   console.log(formInputValue);
  if (formInputValue === 0) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Son kiriting`;
    userChance = 7;
  } else if (userChance === 0) {
    formInput.disabled = true;
    randomBtn.setAttribute("disabled", "Stop");
    randomResText.classList.add("text-white", "bg-danger");
    randomResText.textContent = `Afsuski sizning imkoniyatingiz qolmadi qaytadan urunib ko'ring`;
  } else if (randomNumber > formInputValue) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Siz topgan sondan katta`;
  } else if (randomNumber < formInputValue) {
    randomResText.classList.add("text-danger", "bg-info");
    randomResText.textContent = `Siz topgan sondan kichik`;
  } else if (formInputValue === randomNumber) {
    randomResText.classList.add("text-white", "bg-success");
    randomResText.textContent = `Siz g'olib bo'ldingiz. Tabriklaymiz`;
    formInput.disabled = true;
    randomBtn.setAttribute("disabled", "Stop");
  }
});

refreshBtn.addEventListener("click", () => {
  window.location.reload();
});
