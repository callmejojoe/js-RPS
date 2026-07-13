console.log("game start");

const mainPage = document.getElementById("mainPage");
mainPage.innerHTML = `
<h1 id= head > Rock Paper Scissors (js btw) </h1>
<ul id= list ></ul>
<button id= 'prmtp' >click me</button>
<div id= txt></div>
`
const list = document.getElementById("list");
list.innerHTML = `
<li> tehe </li>
`
function getPlayerchoice() {
let choice = prompt("say smt twink", "like this shii");
	const txt = document.getElementById("txt");
	txt.innerHTML = `
            <h2 id= choicetxt > ${choice} </h2>
	`;
	console.log(choice);
	return(choice);
}

const prmptTest = document.getElementById('prmtp');
prmptTest.addEventListener("click", () => {getPlayerchoice()})
//ignore, just for fun
//psuedo code
//score board is created
let playerScore = 0;
let compScore = 0;
//max score is decided
let maxScore = 3;
//game starts {a loop that continues till either player reaches the max score}
function gameStart() {}
//player inputs their choice of attack (rock, paper, scissors)
//computer generates a random choice to go against the player
//a rule() funtion takes the inputs as parameters 
//the rule() funtion updates the score board based on who wins that round
//game ends when a player reaches the max score
//celebrate the winning player


