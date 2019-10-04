"use strict"

// Declaration of Global Variables
      const choices = ["rock", "paper", "scissors"];
      let playerChoice;
      let computerChoice;
      let playerScore = 0;
      let computerScore = 0;
      let gameMessage;

// Add Function Calls to EventListeners on DOM Elements
 document.getElementById("rock-img").addEventListener("click", function(){game("rock");});
 document.getElementById("paper-img").addEventListener("click", function(){game("paper");}); 
 document.getElementById("scissors-img").addEventListener("click", function(){game("scissors");});  
 document.getElementById("about-tab").addEventListener("click", function(){about();});

// Function to export updated variables to html script
      function updateToDom() {
        document.getElementById("player-score").innerHTML = playerScore;
        document.getElementById("computer-score").innerHTML = computerScore;
        document.getElementById("message").innerHTML = gameMessage;
     }


// Function to random select computer-Choice from Array
      function computerPlay () {
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];
        return computerChoice;
      }
      

// Function to play one round and determine win-loose and update-score.
      function playRound(playerSelection, computerSelection) {
        if (playerSelection == computerSelection) {
          gameMessage = ("it's a draw !"); 
        }
        else if (playerSelection == "rock") {
          if (computerSelection == "scissors") {
            playerScore ++; 
            gameMessage = ("You Win ! , The Rock blunts the Scissors");
          }
          else {
            computerScore ++;
            gameMessage = ("You Loose ! , The Paper covers the Rock");
          }
        }
        else if (playerSelection == "paper") {
          if(computerSelection == "rock") {
            playerScore ++; 
            gameMessage = ("You Win ! , The Paper covers the Rock");
          }
          else {
            computerScore ++;
            gameMessage = ("You Loose ! , The Scissors cuts the Paper");
          }  
        } 
        else if (playerSelection == "scissors") {
        
          if(computerSelection == "paper") {
            playerScore ++; 
            gameMessage = ("You Win ! , The Scissors cuts the Paper");
          }
          else {
            computerScore ++;
            gameMessage = ("You Loose ! , The Rock blunts the Scissors");
          }
        }
        else {
         gameMessage = ("Right Input is: Rock, Paper or Scissors !");
        }
      }

// Function to play the game until 5 rounds won by player or computer      
      function game(choice) {
        playerChoice = choice;
        computerChoice = computerPlay()

        playRound(playerChoice,computerChoice);
        showMoves(); 


        if (playerScore == 5) {gameMessage = ("Congratulations !, You won the Game ");}
        if (computerScore == 5) {gameMessage = ("Potluck !, Try another Game !");}
        
        updateToDom();

        if (playerScore == 5 || computerScore == 5) {
          resetGame();}
      }

// Function to show the Moves
       function showMoves () {
        document.getElementById("response-cnt").style.visibility = "visible"; 
        if (playerChoice == "rock") {document.getElementById("player-img").style.backgroundImage =  "url(./images/rock-player.png)";}  
        if (playerChoice == "paper") {document.getElementById("player-img").style.backgroundImage =  "url(./images/paper-player.png)";} 
        if (playerChoice == "scissors") {document.getElementById("player-img").style.backgroundImage =  "url(./images/scissors-player.png)";} 
        if (computerChoice == "rock") {document.getElementById("computer-img").style.backgroundImage =  "url(./images/rock-computer.png)";} 
        if (computerChoice == "paper") {document.getElementById("computer-img").style.backgroundImage =  "url(./images/paper-computer.png)";}
        if (computerChoice == "scissors") {document.getElementById("computer-img").style.backgroundImage =  "url(./images/scissors-computer.png)";}
        setTimeout(function(){ document.getElementById("response-cnt").style.visibility = "hidden"; }, 3000);
       }

// Function to reset scores to start a new game
      function resetGame() {
        playerScore = 0;
        computerScore = 0;
      }

// Function to pass about info to message bar.
      function about() {
        gameMessage = ("Made by: Gijsbert de Leeuw (A study assignment for The Odin Project.)");
        updateToDom();
      }
