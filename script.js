// ! Method 1

/*
const userChoiceDisplay = document.getElementById("user_choice");
const compChoiceDisplay = document.getElementById("comp_choice");
const resultElDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let compChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerText = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNo = Math.floor(Math.random() * possibleChoices.length);

  if (randomNo === 1) {
    compChoice = "rock";
  } else if (randomNo === 2) {
    compChoice = "paper";
  } else {
    compChoice = "scissor";
  }
  compChoiceDisplay.innerText = compChoice;
}

function getResult() {
  if (compChoice === userChoice) {
    result = "Draw";
  } else if (userChoice === "paper" && compChoice === "scissor") {
    result = "You lost !";
  } else if (userChoice === "paper" && compChoice === "rock") {
    result = "You won !";
  } else if (userChoice === "rock" && compChoice === "scissor") {
    result = "You won !";
  } else if (userChoice === "rock" && compChoice === "paper") {
    result = "You lost !";
  } else if (userChoice === "scissor" && compChoice === "paper") {
    result = "You won !";
  } else if (userChoice === "scissor" && compChoice === "rock") {
    result = "You lost !";
  }
  resultElDisplay.innerText = result;
}
*/

// ! Method 2
/*
const userChoiceDisplay = document.createElement("h1");
const compChoiceDisplay = document.createElement("h1");
const resultElDisplay = document.createElement("h1");
const gameGrid = document.getElementById("game");
let userChoice;
let compChoice;
let result;

gameGrid.append(userChoiceDisplay, compChoiceDisplay, resultElDisplay);

const choices = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = "You choose : " + userChoice;
  generateComputerChoice();
  getResults();
};

const generateComputerChoice = () => {
  const randomNo = choices[Math.floor(Math.random() * choices.length)];
  compChoice = randomNo;
  compChoiceDisplay.innerHTML = "Comp choose : " + compChoice;
};

// create buttons with id , text ,add event listeners and append it within div
for (let i = 0; i < choices.length; i++) {
  const button = document.createElement("button");
  button.id = choices[i];
  button.innerHTML = choices[i];
  button.addEventListener("click", handleClick);
  gameGrid.appendChild(button);
}

const getResults = () => {
  switch (userChoice + compChoice) {
    case "scissorpaper":
    case "rockscissor":
    case "paperrock":
      resultElDisplay.innerHTML = "You Win! ";
      break;
    case "paperscissor":
    case "scissorrock":
    case "rockpaper":
      resultElDisplay.innerHTML = "You Lost! ";
      break;
    case "paperpaper":
    case "scissorscissor":
    case "rockrock":
      resultElDisplay.innerHTML = "Draw!";
      break;

    default:
      break;
  }
};
*/

// ! Method 3
const resultDisplay = document.querySelector("#result");
const choicesDisplay = document.querySelector("#choices");

const choices = ["rock", "paper", "scissors"];

const handleClick = (e) => {
  // passed userChoice , compChoice
  getResults(
    e.target.innerHTML,
    choices[Math.floor(Math.random() * choices.length)]
  );
};

choices.forEach((choice) => {
  const button = document.createElement("button");
  button.innerHTML = choice;
  button.addEventListener("click", handleClick);
  choicesDisplay.appendChild(button);
});

const getResults = (userChoice, compChoice) => {
  switch (userChoice + compChoice) {
    case "scissorpaper":
    case "rockscissor":
    case "paperrock":
      resultDisplay.innerHTML =
        "You chose : " +
        userChoice +
        "  Comp chose : " +
        compChoice +
        "  You Win!!";
      break;

    case "paperscissor":
    case "scissorrock":
    case "rockpaper":
      resultDisplay.innerHTML =
        "You chose : " +
        userChoice +
        "  Comp chose : " +
        compChoice +
        "  You Lost!!";
      break;
    case "paperpaper":
    case "scissorscissor":
    case "rockrock":
      resultDisplay.innerHTML =
        "You chose : " +
        userChoice +
        "  and Comp chose : " +
        compChoice +
        " It's a Draw!";
      break;

    default:
      break;
  }
};
