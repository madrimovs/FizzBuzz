const elForm = document.querySelector("#form"),
  elInput = document.querySelector("#input"),
  elBtn = document.querySelector("#btn"),
  elH1 = document.querySelector("#h1"),
  elText = document.querySelector("#text");

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const num = elInput.value - 0;
  if (!isNaN(num)) {
    if (num % 15 === 0) {
      elH1.textContent = "FizzBuzz";
    } else if (num % 3 === 0) {
      elH1.textContent = "Fizz";
    } else if (num % 5 === 0) {
      elH1.textContent = "Buzz";
    } else {
      elH1.textContent = num;
    }
  } else {
    elText.textContent = "Raqam kiriting";
  }
});
