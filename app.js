console.log("game start");

const mainPage = document.getElementById("mainPage");
mainPage.innerHTML = `
<h1 id= head > Rock Paper Scissors (js btw) </h1>
<button id= 'startGame' >click me</button>
<div id= txt></div>
`
const txt = document.getElementById("txt");
function gRint(max) {
  let rand = Math.floor(Math.random() * max);
	txt.innerHTML = `
	<p1> ${rand} </p1>
`
}
const startGame = document.getElementById('startGame');
startGame.addEventListener("click", () => {gRint(3)})
//ignore, just for fun
//psuedo code
//score board is created
let playerScore = 0;
let compScore = 0;
const handOptions = ["rock", "paper", "scissors"]
//max score is decided
let maxScore = 3;
//game starts {a loop that continues till either player reaches the max score}
function gameStart() {
//player inputs their choice of attack (rock, paper, scissors)
	const getPlayerChoice = prompt("tis a game of rock paper scissors, type your hand")
//computer generates a random choice to go against the player
	const getCompChoice = () => {}
//a rule() funtion takes the inputs as parameters 
	function gameRule(playerChoice, compChoice) {
//the rule() funtion updates the score board based on who wins that round
	}
//game ends when a player reaches the max score
}
//celebrate the winning player


