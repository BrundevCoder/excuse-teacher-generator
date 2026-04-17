// link every DOM
const excuseDisplay = document.getElementById("excuseDisplay");
const generateButton = document.getElementById("generateBtn");
const historicList = document.getElementById("historic-list");

let alreadyDisplayedExcueses = [];

const excuses = [
  "Sorry, my dog ate my homework!",
  "A time traveler told me that if I finished this homework, the universe would collapse.",
  "A glitch in the Matrix deleted my files and replaced them with cat memes.",
  "My code was so spicy that it set my local server on fire.",
  "My dog didn't eat my homework; he actually debugged it and found 42 errors.",
  "I was studying, but the letters on the page started a dance battle.",
  "My Dog eat My code...",
  "Lesson not found 404",
  "Why am I late? Simple, I had to cross mountains and lakes just to get here.",
  "I'm sleepy, I stayed up until 3 AM trying to find the bug on line 1474 (the line was empty).",
  "I fell while my horse was crossing the road...",
  "I've been trying to understand why '1' + '1' = '11'"
  // add more
];

let historyExcuses = [];

// functions

function randomColor() {
  let color = "";

  // choose a number between 1 and 2
  let randomNumber = Math.floor(Math.random() * 2);

  if (randomNumber === 1) {
    color = "red";
  }
  else {
    color = "blue";
  }

  return color;
}

function getRandomExcuse() {
  let maxIndex = excuses.length;
  let RandomIndex = Math.floor(Math.random() * maxIndex);

  return excuses[RandomIndex];
}

function placeInHistory(excuse) {

  for (let i = 0; i < historyExcuses.length; i++) {
    if (historyExcuses[i] === excuse) {
      return;
    }
  }
  historyExcuses.push(excuse);

  let excuseColor = randomColor();

  const listItem = document.createElement("li");
  const node = document.createTextNode(`"${excuse}"`);

  if (excuseColor === "red") {
    listItem.classList.add("red-color");
  }
  else {
    listItem.classList.add("blue-color");
  }

  listItem.appendChild(node);

  historicList.appendChild(listItem);
}

function displayExcuse() {
  let excuse = getRandomExcuse();

  if (excuses.length === alreadyDisplayedExcueses.length) {
    excuseDisplay.innerText = `No more excuses! We only have ${excuses.length} excuses!`;
    return;
  }

  while (alreadyDisplayedExcueses.includes(excuse)) {
    excuse = getRandomExcuse();
  }

  placeInHistory(excuse);
  alreadyDisplayedExcueses.push(excuse);

  excuseDisplay.innerText = `${excuse}`;
}

// connect to the button
generateButton.addEventListener("click", () => {
  generateButton.disabled = true;
  excuseDisplay.innerText = "choosing an excuse";
  setTimeout(() => {
    displayExcuse();
    generateButton.disabled = false;
  }, 900);
})
