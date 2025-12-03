/**
 * Fonction qui gère le choix de l'ordinateur.
 * @returns {string}
 */
function getComputerChoice() {
    let indice = Number(Math.random().toFixed(5));
    console.log(indice);
    if (indice < 0.33333) {
        return "pierre";
    }
    if (indice < 0.66666) {
        return "feuille";
    }
    return "ciseaux";
}

/**
 * Fonction qui gère le choix du
 * @returns {string}
 */
function getHumanChoice() {
    return prompt(
        "Vous jouez quoi ? => 'Pierre, Feuille ou Ciseaux'."
    ).toLowerCase();
}

/**
 * Fonction qui gère la logique de jeu.
 * @param {string} computerChoice
 * @param {string} humanChoice
 * @returns {string}
 */
function playRound(computerChoice, humanChoice) {
    try {
        if (computerChoice === "pierre" && humanChoice === "ciseaux") {
            computerScore++;
            return "Vous avez perdu ! Pierre bat Ciseaux.";
        } else if (computerChoice === "feuille" && humanChoice === "pierre") {
            computerScore++;
            return "Vous avez perdu ! Feuille bat Pierre.";
        } else if (computerChoice === "ciseaux" && humanChoice === "feuille") {
            computerScore++;
            return "Vous avez perdu ! Ciseaux bat Feuille.";
        } else if (humanChoice === "pierre" && computerChoice === "ciseaux") {
            humanScore++;
            return "Vous avez gagnez ! Pierre bat Ciseaux.";
        } else if (humanChoice === "feuille" && computerChoice === "pierre") {
            humanScore++;
            return "Vous avez gagnez ! Feuille bat Pierre.";
        } else if (humanChoice === "ciseaux" && computerChoice === "feuille") {
            humanScore++;
            return "Vous avez gagnez ! Ciseaux bat Feuille.";
        } else {
            return "Égalité ! Match nul.";
        }
    } catch (erreur) {
        console.log(erreur.message);
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame() {
    console.log("La partie se joue en 05 manches.");

    for (let i = 0; i < 5; i++) {
        console.log(`Manche numéro  ${i + 1}:`);
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();
        console.log("Computer: " + computerChoice);
        console.log("Human: " + humanChoice);

        let message = playRound(computerChoice, humanChoice);
        console.log(message);
        console.log("Computer: " + computerScore);
        console.log("Human: " + humanScore);
    }

    console.log("Le Jeu est terminé.");
    if (computerScore > humanScore) {
        console.log("Vous avez perdu la partie.");
    } else if (humanScore > computerScore) {
        console.log("Vous avez remporté la partie.");
    } else {
        console.log("Match nul !");
    }
}

playGame();