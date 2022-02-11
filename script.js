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


let playerScoreDisplay = document.getElementById("player-score")
let computerScoreDisplay = document.getElementById("computer-score")

let playerScore = 0
let computerScore = 0

const resultDisplay = document.getElementById("result")
function isWinner(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            resultDisplay.innerHTML = "It's a draw!";
        } else if (computerSelection === "paper") {
            resultDisplay.innerHTML = "You Lose! Paper beats Rock";
            computerScoreDisplay.innerHTML = computerScore++;
        } else {
            resultDisplay.innerHTML = "You win! Rock beats Scissor"
            playerScoreDisplay.innerHTML = playerScore++
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            resultDisplay.innerHTML = "You win! Paper beats Rock";
            playerScoreDisplay.innerHTML = playerScore++
        } else if (computerSelection === "paper") {
            resultDisplay.innerHTML = "It's a draw!";
        } else {
            resultDisplay.innerHTML = "You lose! Scissor beats Paper"
            computerScoreDisplay.innerHTML = computerScore++
        }
    }

    if (playerSelection === "scissor") {
        if (computerSelection === "rock") {
            resultDisplay.innerHTML = "You lose! Rock beats Scissor";
            computerScoreDisplay.innerHTML = computerScore++
        } else if (computerSelection === "paper") {
            resultDisplay.innerHTML = "You win! Scissor beats Paper";
            playerScoreDisplay.innerHTML = playerScore++
        } else {
            resultDisplay.innerHTML = "It's a draw!"
        }
    }
}
