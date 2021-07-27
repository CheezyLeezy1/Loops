let userScore = 0;
let computerScore = 0;
let winMessage = 'Humans Win!';
let loseMessage = 'Computer is better this time!';
let drawMessage = 'its a draw!';



function computerRandom() {
	let computer = Math.floor(Math.random() * 3);
	switch (computer) {
		case 0:
			return 'rock';
		case 1:
			return 'paper';

		case 2:
			return 'scissors';
	}
}
//outcome function - series of if and elses
function outcome(userPick, computerPick) {
	if (
		(userPick === 'rock' && computerPick === 'scissors') ||
		(userPick === 'paper' && computerPick === 'rock') ||
		(userPick === 'scissors' && computerPick === 'paper')
	) {
		userScore++;
	} else if (
		(computerPick === 'rock' && userPick === 'scissors') ||
		(computerPick === 'paper' && userPick === 'rock') ||
		(computerPick === 'scissors' && userPick === 'paper')
	) {
		computerScore++;
	}

	if (userScore > computerScore) {
		return winMessage;
	} else if (userScore < computerScore) {
		return loseMessage;
	} else {
		return drawMessage;
	}

}
//run game
function game() {
	
	let userPick;
	let computerPick;
	let message;
	for (let i = 0; i < 3; i++) {
		computerPick = computerRandom();
		userPick = prompt('Rock or Paper or Scissor?', '');
		// added the function outcome and saved in into a variable so it can be used to display the message
		message = outcome(userPick, computerPick);
		console.log(
			`Your Selection: ${userPick.toUpperCase()} | Computer Selection: ${computerPick.toUpperCase()} | Result: ${message}`
		);
	}
	alert(
		`Your Selection: ${userPick.toUpperCase()} \n Computer Selection: ${computerPick.toUpperCase()} \n Result: ${message} \n Score: You ${userScore} vs Computer ${computerScore}`
	);

	userScore = 0;
	computerScore = 0;
}




