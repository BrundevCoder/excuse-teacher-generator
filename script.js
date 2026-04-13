// link every DOM
const excuseDisplay = document.getElementById("excuseDisplay");
const generateButton = document.getElementById("generateBtn");
const historicList = document.getElementById("historic-list");

const excuses = [
  "Sorry, my dog eat me homework!",
  "A time traveler told me that if I finished this homework, the universe would collapse.",
  "A glitch in the Matrix deleted my files and replaced them with cat memes.",
  "My code was so spicy that it set my local server on fire.",
  "My dog didn't eat my homework; he actually debugged it and found 42 errors.",
  "I was studying, but the letters on the page started a dance battle.",
  "My Dog eat My code..."
  // add more
];

let historyExcuses = [];

// functions

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

  const listItem = document.createElement("li");
  const node = document.createTextNode(`"${excuse}"`);

  listItem.appendChild(node);

  historicList.appendChild(listItem);
}

function displayExcuse() {
  let excuse = getRandomExcuse();

  placeInHistory(excuse);

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