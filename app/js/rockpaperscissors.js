////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

var getInput = function() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    var answer = prompt();
    return answer;
}

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

var getPlayerMove = function(playerMove) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    if (playerMove !== undefined || null){return playerMove;
    }
    else {getInput();
    }
  }

  var getComputerMove = function(computerMove) {
      // Write an expression that operates on a variable called `move`
      // If a `move` has a value, your expression should evaluate to that value.
      // However, if `move` is not specified / is null, your expression should equal `randomPlay().
      if (computerMove === undefined || null){return randomPlay();
      } else {return computerMove;
      }
  }

var getWinner = function(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
  if (playerMove === 'rock' && computerMove === 'paper'){
      winner = 'computer';
    }
    else if (playerMove === 'rock' && computerMove === 'scissors'){
      winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'rock'){
      winner = 'player';
    }
    else if (playerMove === 'paper' && computerMove === 'scissors'){
      winner = 'computer';
    }
    else if (playerMove === computerMove){
      winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while(playerWins<5 && computerWins<5){
    	var playerMove = getInput();
    	getPlayerMove(playerMove);
    	var computerMove = randomPlay();
		getComputerMove(computerMove);
		var winner = getWinner(playerMove, computerMove);
    	if (winner === 'player'){
    		playerWins = playerWins + 1;
    		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  			console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    	}
    	if(winner === 'computer') {
    		computerWins = computerWins + 1;
    		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  			console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    	}
    	if(winner === 'tie'){
    		console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
  			console.log('The score is currently ' + playerWins + ' to ' + computerWins + '\n');
    	}
   		}
   		return [playerWins, computerWins];
}
playToFive();
