const OPTIONS = ["rock", "paper", "scissor"]
function computerPlay() {
    let random = Math.floor(Math.random() * OPTIONS.length)
    return OPTIONS[random]
}

const playerOptions = document.querySelectorAll("[data-selection]")
playerOptions.forEach(playerOptions => {
    playerOptions.addEventListener("click", e => {
        const selectionName = playerOptions.dataset.selection
        const playerSelection = OPTIONS.find(selection => selection === selectionName)
        playRound(playerSelection)
    })
})

function playRound(playerSelection) {
    const computerSelection = computerPlay()
    console.log(isWinner(playerSelection, computerSelection))
}

let playerScore = 0
let computerScore = 0
let roundNumber = 0

const resultDisplay = document.getElementById("result")
const roundDisplay = document.getElementById("round")
function isWinner(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            resultDisplay.innerHTML = "It's a draw!";
            roundNumber++
        } else if (computerSelection === "paper") {
            resultDisplay.innerHTML = "You Lose! Paper beats Rock";
            computerScore++;
            roundNumber++
        } else {
            resultDisplay.innerHTML = "You win! Rock beats Scissor"
            playerScore++
            roundNumber++
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultDisplay.innerHTML = "You win! Paper beats Rock";
            playerScore++
            roundNumber++
        } else if (computerSelection === "paper") {
            resultDisplay.innerHTML = "It's a draw!";
            roundNumber++
        } else {
            resultDisplay.innerHTML = "You lose! Scissor beats Paper"
            computerScore++
            roundNumber++
        }
    }

    if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            resultDisplay.innerHTML = "You lose! Rock beats Scissor";
            computerScore++
            roundNumber++
        } else if (computerSelection === "paper") {
            resultDisplay.innerHTML = "You win! Scissor beats Paper";
            playerScore++
            roundNumber++
        } else {
            resultDisplay.innerHTML = "It's a draw!"
            roundNumber++
        }
    }

    updateScore()
    checkWinner()

}

function updateScore() {
    document.getElementById("player-score").textContent = playerScore
    document.getElementById("computer-score").textContent = computerScore
    document.getElementById("round").textContent = roundNumber
}

function checkWinner() {
    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            alert("Congratulations! You win the game!")
        } else if (computerScore === 5) {
            alert("You lose! Try again!")
        }
    }
    resetGame()
}

function resetGame() {
    if (playerScore === 5 || computerScore === 5) {
        playerScore = 0;
        computerScore = 0;
        roundNumber = 0;
    }
}