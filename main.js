const game = ()=> {
   let pScore = 0;
   let cScore = 0;
   
   //Start the game
   const startGame = () => {
       const playBtn = document.querySelector(".intro button");
       const introScreen = document.querySelector(".intro");
       const match = document.querySelector(".match");

       playBtn.addEventListener("click", () => {
           introScreen.classList.add("fadeOut");
           match.classList.add("fadeIn");
       });
   };

   //Play match
   const playMatch = () => {
       const options = document.querySelectorAll(".options button");
       const playerHand = document.querySelector(".player-hand");
       const computerHand = document.querySelector(".computer-hand");
       const hands = document.querySelectorAll(".hands img");

       hands.forEach(hand => {
           hand.addEventListener("animationend", function() {
                this.style.animation = '';
           });
       })
       //Computer options

       const computerOptions = ["rock", "paper", "scissors"];

       options.forEach(option => {
            option.addEventListener("click", function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                

                setTimeout(() => {
                    //Here is where we compare hands
                    compareHands(this.textContent, computerChoice);
                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 2000);

                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
   };

   const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
   }

   const compareHands = (playerChoice, computerChoice) => {
    //update text
    const winner = document.querySelector(".winner");
    //checking for a tie
    if(playerChoice === computerChoice) {
        winner.textContent = "it is a tie";
        return;
    }
    //check for rock
    if(playerChoice === "rock") {
        if(computerChoice === "scissors") {
            winner.textContent = "Player Wins"
            pScore++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    } 
   //check for paper
   if(playerChoice === "paper") {
        if(computerChoice === "rock") {
            winner.textContent = "Player Wins"
            pScore++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }    
    }
    //check for scissors
    if(playerChoice === "scissors") {
        if(computerChoice === "paper") {
            winner.textContent = "Player Wins"
            pScore++;
            updateScore();
            return;
        }else {
            winner.textContent = "Computer Wins";
            cScore++;
            updateScore();
            return;
        }
    } 
}; 
       
   
   //is call all the inner function
   startGame();
   playMatch();
};

//start the game function
game();