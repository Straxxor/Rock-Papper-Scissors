const array1 = ["rock", "paper", "scissors"];
let playerSelectionTemp = prompt("Rock, paper or scissors kind sir?");
let playerSelection = playerSelectionTemp.toLowerCase();
const computerSelection = getComputerChoice();


function getComputerChoice() {
    return(array1[Math.floor(Math.random() * array1.length)]);
}

function oneRound () {
    let compSel = getComputerChoice();
    if (playerSelection === compSel) {
        return("Draw!");
    }
    else if (playerSelection == "rock" & compSel == "paper") {
        return("Player lost with rock vs paper!");
    }
    else if (playerSelection == "rock" & compSel == "scissors") {
        return("Player won with rock vs scissors!");
    }

    else if (playerSelection == "paper" & compSel == "rock") {
        return("Player won with paper vs rock!");
    }
    else if (playerSelection == "paper" & compSel == "scissors") {
        return("Player lost with paper vs scissors!");
    }

    else if (playerSelection == "scissors" & compSel == "rock") {
        return("Player lost with scissors vs rock!");
    }
    
    else if (playerSelection == "scissors" & compSel == "paper") {
        return("Player won with scissors vs paper!");
    }
}