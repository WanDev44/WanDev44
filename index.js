const newGame = document.querySelector(".new-game");

const rollDice = document.querySelector(".roll-dice");

const hold = document.querySelector(".hold");

const dice = document.querySelector(".des");

const pOnePointsRound = document.querySelector(".playerOne-points-round");

const pOnePointsGlobal = document.querySelector(".playerOne-points-global");

const pTwoPointsRound = document.querySelector(".playerTwo-points-round");

const pTwoPointsGlobal = document.querySelector(".playerTwo-points-global");

const mask = document.querySelector(".mask");

// Début du code

let pOne = "Player One";
let pTwo = "Player Two";
let state = "New Game";
let currentPlayer = pOne;
let nombre = 0;
let pOnePtsRound = 0;
let pOnePtsGlobal = 0;
let pTwoPtsRound = 0;
let pTwoPtsGlobal = 0;
currentPlayer == pOne;

function resetRound() {
  pOnePtsRound = 0;
  pTwoPtsRound = 0;
  currentPlayer == pOne;
}

function resetGlobal() {
  pOnePtsGlobal = 0;
  pTwoPtsGlobal = 0;
  currentPlayer == pOne;
}

function resetAffichage() {
  dice.classList.remove(
    "faceUne",
    "faceDeux",
    "faceTrois",
    "faceQuatre",
    "faceCinq",
    "faceSix"
  );
}

function oopsOne() {
  mask.style.background = "red";
}

function goodOne() {
  mask.style.background = "white";
}

function niceOne() {
  mask.style.background = "green";
}

function affichageDe() {
  if (nombre == 1) {
    oopsOne();
    dice.classList.add("faceUne");
  } else if (nombre == 2) {
    goodOne();
    dice.classList.add("faceDeux");
  } else if (nombre == 3) {
    goodOne();
    dice.classList.add("faceTrois");
  } else if (nombre == 4) {
    goodOne();
    dice.classList.add("faceQuatre");
  } else if (nombre == 5) {
    goodOne();
    dice.classList.add("faceCinq");
  } else {
    goodOne();
    dice.classList.add("faceSix");
  }
}

function startNewGame() {
  state === "New Game"
    ? console.log(state)
    : console.log("Cliquez sur le bouton New Game");
}

function changeCurrentP() {
  if (currentPlayer == pOne) {
    currentPlayer = pTwo;
    console.log(currentPlayer);
  } else {
    currentPlayer = pOne;
    console.log(currentPlayer);
  }
}

function addPtsRoundInnerHtml() {
  pOnePointsRound.innerHTML = `
    <p>${pOnePtsRound}</p>
  `;
  pTwoPointsRound.innerHTML = `
    <p>${pTwoPtsRound}</p>
  `;
}

function addPtsGlobalInnerHtml() {
  pOnePointsGlobal.innerHTML = `
    <p>${pOnePtsGlobal}</p>
  `;
  pTwoPointsGlobal.innerHTML = `
    <p>${pTwoPtsGlobal}</p>
  `;
}

function holdPts() {
  if (currentPlayer == pOne) {
    pOnePtsGlobal += pOnePtsRound;
    pOnePtsRound = 0;
    addPtsRoundInnerHtml();
    addPtsGlobalInnerHtml();
  } else {
    pTwoPtsGlobal += pTwoPtsRound;
    pTwoPtsRound = 0;
    addPtsRoundInnerHtml();
    addPtsGlobalInnerHtml();
  }
}

function addPtsRound() {
  if (currentPlayer == pOne) {
    pOnePtsRound += nombre;
  } else {
    pTwoPtsRound += nombre;
  }
  addPtsRoundInnerHtml();
  console.log(pOnePtsRound);
  console.log(pTwoPtsRound);
}

function lancerLeDe() {
  resetAffichage();
  const anim1 = Math.random() * 6 + 1;
  nombre = Math.trunc(anim1);
  affichageDe();
  resetAffichage();
  const anim2 = Math.random() * 6 + 1;
  nombre = Math.trunc(anim2);
  affichageDe();
  resetAffichage();
  const anim3 = Math.random() * 6 + 1;
  nombre = Math.trunc(anim3);
  affichageDe();
  resetAffichage();
  const anim4 = Math.random() * 6 + 1;
  nombre = Math.trunc(anim4);
  affichageDe();
  resetAffichage();
  const nombreDecimal = Math.random() * 6 + 1;
  nombre = Math.trunc(nombreDecimal);
  console.log(nombre);
  affichageDe();
  if (nombre != 1) {
    addPtsRound();
  } else {
    pOnePtsRound = 0;
    pTwoPtsRound = 0;
    changeCurrentP();
  }
}

newGame.addEventListener("click", () => {
  resetRound();
  resetGlobal();
  addPtsRoundInnerHtml();
  addPtsGlobalInnerHtml();
  goodOne();
  startNewGame();
  resetAffichage();
});

rollDice.addEventListener("click", () => {
  console.log("clicked");
  lancerLeDe();
});

hold.addEventListener("click", () => {
  console.log("clicked");
  holdPts();
  niceOne();
  changeCurrentP();
});
