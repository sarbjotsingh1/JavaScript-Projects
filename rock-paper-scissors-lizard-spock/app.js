let computerChoiceDisplay = document.getElementById("computer-choice")
let userChoiceDisplay = document.getElementById("user-choice")
let resultDisplay = document.getElementById("result")
let possibleChoice = document.querySelectorAll("button")
let userChoice;
let computerChoice;
let result;

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    genrateComputerChoice();
    getResult();
}))

function genrateComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 5) + 1
    console.log(randomNumber)
    if(randomNumber == 1)
        computerChoice  = 'Rock'
    else if(randomNumber == 2)
        computerChoice  = 'Paper'
    else if(randomNumber == '3')
        computerChoice = 'Scissor'
    else if(randomNumber == '4')
        computerChoice = 'Lizard'
    else if(randomNumber == '5')
        computerChoice = 'Spock'
    
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if(computerChoice == userChoice)
        result = 'It is Draw'
    if(computerChoice == 'Rock' || userChoice == 'Paper' || userChoice == 'Spock')
        result = 'You Won'
    if(computerChoice == 'Rock' || userChoice == 'Scissors'|| userChoice == 'Lizard')
        result = 'You Lost'
    if(computerChoice == 'Paper' || userChoice == 'Rock' || userChoice == 'Spock')
        result = 'You Lost'
    if(computerChoice == 'Paper' || userChoice == 'Scissors' || userChoice == 'Lizard')
        result = 'You Won'
    if(computerChoice == 'Scissors' || userChoice == 'Rock' || userChoice == 'Spock')
        result = 'You Won'
    if(computerChoice == 'Scissors' || userChoice == 'Paper' || userChoice == 'Lizard')
        result = 'You Lost'
    if(computerChoice == 'Spock' || userChoice == 'Paper' || userChoice == 'Lizard')
        result = 'You Won'
    if(computerChoice == 'Spock' || userChoice == 'Rock' || userChoice == 'Scissors')
        result = 'You Lost'
    if(computerChoice == 'Lizard' || userChoice == 'Rock' || userChoice == 'Scissors')
        result = 'You Won'
    if(computerChoice == 'Lizard' || userChoice == 'Spock' || userChoice == 'Paper')
        result = 'You Lost'
    
    resultDisplay.innerHTML = result
    
}

