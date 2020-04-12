var uscore = 0;
var cscore = 0;
const uscore_span = document.getElementById("user-s");
const cscore_span = document.getElementById("computer-s");
const score_div = document.querySelector(".score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompChoice(){
	const choices = ['r','p','s'];
	const randNo = Math.floor(Math.random()*3);
	return choices[randNo];
}

function convert(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	return "Scissors";
}

function win(uChoice, compChoice){
	uscore++;
	uscore_span.innerHTML = uscore;
	cscore_span.innerHTML = cscore;
	const smallUWord = "user".fontsize(4).sub();
	const smallCWord = "comp".fontsize(4).sub();
	result_p.innerHTML = `${convert(uChoice)}${smallUWord} beats ${convert(compChoice)}${smallCWord}. You win!`;
}

function lose(uChoice, compChoice){
	cscore++;
	uscore_span.innerHTML = uscore;
	cscore_span.innerHTML = cscore;
	const smallUWord = "user".fontsize(4).sub();
	const smallCWord = "comp".fontsize(4).sub();
	result_p.innerHTML = `${convert(uChoice)}${smallUWord} loses to ${convert(compChoice)}${smallCWord}. You lost!`;
}

function draw(uChoice, compChoice){
	uscore_span.innerHTML = uscore;
	cscore_span.innerHTML = cscore;
	const smallUWord = "user".fontsize(4).sub();
	const smallCWord = "comp".fontsize(4).sub();
	result_p.innerHTML = `${convert(uChoice)}${smallUWord} equals ${convert(compChoice)}${smallCWord}. It's a draw!`;
}

function game(uChoice) {
	const compChoice = getCompChoice();
	switch(uChoice + compChoice){
		case "rs":
		case "pr":
		case "sp":
			win(uChoice, compChoice);
			break;
		case "sr":
		case "rp":
		case "ps":
			lose(uChoice, compChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(uChoice, compChoice);
			break;
	}
}

function main(){
	rock_div.addEventListener('click', function(){
		game("r");
	})

	paper_div.addEventListener('click', function(){
		game("p");
	})

	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

main();