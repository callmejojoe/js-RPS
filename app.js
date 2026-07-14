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
//ignore, just for fun
//psuedo code
//score board is created
//max score is decided
//game starts {a loop that continues till either player reaches the max score}
//player inputs their choice of attack (rock, paper, scissors)
//computer generates a random choice to go against the player
//a rule() funtion takes the inputs as parameters 
//the rule() funtion updates the score board based on who wins that round
//game ends when a player reaches the max score
//celebrate the winning player

const scoreBoard = {
	player: 0,
	comp: 0
};
function startzaGame() {
	let hand = 0
	txt.innerHTML = `
	<div>
	<button id=rock >Rock</button>
	<button id= paper >Paper</button>
	<button id= scissor >Scissor</button>
	</div>
	<div id= "meh" ></div>
	`
	const rock = document.getElementById("rock")
	rock.addEventListener("click", () => {hand = 0; console.log(hand); roundStart(hand)})
	const paper = document.getElementById("paper")
	paper.addEventListener("click", () => {hand = 1; console.log(hand); roundStart(hand)})
	const scissor = document.getElementById("scissor")
	scissor.addEventListener("click", () => {hand = 2; console.log(hand); roundStart(hand)})
	const meh = document.getElementById("meh")
	return(hand);
}
function getCompHand() {
	let hand = Math.floor(Math.random() * 3);
	return(hand);
}
function gameRule(playerHand, compHand) {
	if (playerHand === compHand) {
		console.log("a tie");
		return;
		}
	if ((playerHand === 0 || playerHand === 2) && (compHand === 2 || compHand === 0)) {
		playerHand = Math.abs(playerHand - 2);
		compHand = Math.abs(compHand - 2);
	}
	if (playerHand > compHand) {
		scoreBoard.player += 1
		return;
		} else {
			scoreBoard.comp += 1 
		}
}

function roundStart(playerHand) {
	console.log("start this shii");
	txt.innerHTML = ` <p> game about to start </p> `;
	let plyrHnd = playerHand;
	let cmpHnd = getCompHand();
	gameRule(plyrHnd, cmpHnd);
		console.log("Player score " + scoreBoard.player);
		console.log(`\n`);
		console.log("Computer score " + scoreBoard.comp);
		if (scoreBoard.player === 5) {
			console.log("player wins");
		txt.innerHTML = `
		<p> Player wins </p>
		`
		return;
		} else if (scoreBoard.comp === 5) {
			console.log("comp wins");
		txt.innerHTML = `
		<p> Computer wins </p>
		`
		return;
		}
}

const startGame = document.getElementById('startGame');
startGame.addEventListener("click", () => {startzaGame();})


