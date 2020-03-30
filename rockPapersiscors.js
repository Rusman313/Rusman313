/* 5.)Define a function called playGame() that takes arguments player1, player2, and playUntil.
Play rounds until one of the players wins playUntil hands
When one player has won enough games, return the winning player objec*/
var playerWin = 0;
var computerWin = 0;

function playGame(player1, computer2, playUntil){
    
    
    while(playerWin < playUntil && computerWin < playUntil){




// 1.) Define a hands array with the values 'rock', 'paper', and 'scissors';
var choice = ['rock','paper','sissors']
// 2.) Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3)
// math.random will return to you a number between 0 and 1, will be a decimal can bel .36  
function getChoice(){
	let rand = math.random();
	if (rand< 0.34 ){
		return choice [0];
		}else if (rand < 0.67 ){
			return choice[1];
		}else{
			return choice[2];
		}
	}

// 3)Define two objects for two players. Each player has name and getHand() properties.
var computerChoice = getChoice();
var userChoice = getChoice();
//4.1-4.2
console.log(computerChoice);
console.log(userChoice);

//4.3-4.5
 function getChoice() {

            let rand = Math.random();

            if (rand < 0.34 ){
                return choice[0];
            }else if (rand < 0.67 ){
                return choice[1];
            }else{
                return choice[2];
            }
        }

        var computerChoice = getChoice();
        var userChoice = getChoice();

        console.log(player1 + ' you have ' + playerWin)
        console.log(computer2 + ' you have ' + computerWin)

        function compare() {
            if(computerChoice == userChoice){
                return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is a tie!";
            }

            if(computerChoice == 'rock'){
                if(userChoice == 'scissors'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
            
            if(computerChoice == 'paper'){
                if(userChoice == 'rock'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }

            if(computerChoice == 'scissors'){
                if(userChoice == 'paper'){
                    computerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you lose!";
                }else {
                    playerWin++;
                    return "Computer: " + computerChoice + "\nYou: " + userChoice + "\nThe result is you win!";
                }
            }
            
        }

        console.log(compare());
    }

    console.log('Great job! the ' + computer2 +  ' had ' + computerWin + '. The ' + player1 + ' had ' + playerWin);
}
//6.) Play a game to 5 wins

playGame('Player', 'Computer', 5);

