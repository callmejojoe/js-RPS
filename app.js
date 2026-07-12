console.log("game start");

const mainPage = document.getElementById("mainPage")
mainPage.innerHTML = `
<h1 id= head > Rock Paper Scissors (js btw) </h1>
<ul id= list ></ul>
`
const list = document.getElementById("list")
list.innerHTML = `

<li> ${mainPage} </li>
`//ignore, just for fun

//psuedo code
//score board is created
//max score is decided
//game starts {a loop that continues till either player reaches the max score}
//player inpus their choice of attack (rock, paper, scissors)
//computer generates a random choice to go against the player
//a rule() funtion takes the inputs as parameters 
//the rule() funtion updates the score board based on who wins that round
//game ends when a player reaches the max score
//celebrate the winning player


