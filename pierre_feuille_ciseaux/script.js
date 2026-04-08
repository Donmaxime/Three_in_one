/**
 * Fonction qui gère le choix de l'ordinateur.
 * @returns {string}
 */
function getComputerChoice() {
    let indice = Number(Math.random().toFixed(5));
    //console.log(indice);
    if (indice < 0.33333) {
        return 'pierre';
    }
    if (indice < 0.66666) {
        return 'feuille';
    }
    return 'ciseaux';
}

/**
 * Fonction qui affiche le choix de l'ordinateur sur la page web
 * @param {string} computerChoice
 */
function displayComputerChoice(computerChoice) {
    let zoneAffichageComputer = document.querySelector('.zoneAffichageComputer');
    zoneAffichageComputer.innerText = computerChoice;
}

/**
 * Fonction qui affiche les 02 scores sur la page web
 * @param {number} computerScore
 * @param {number} humanScore
 */
function displayScore(computerScore, humanScore) {
    let zoneScoreOrdinateur = document.querySelector('.zoneScoreOrdinateur span');
    let zoneVotreScore = document.querySelector('.zoneVotreScore span');
    zoneScoreOrdinateur.innerText = computerScore;
    zoneVotreScore.innerText = humanScore;
}

const WINS = {
    pierre: 'ciseaux',
    feuille: 'pierre',
    ciseaux: 'feuille',
};

const LABELS = {
    pierre: 'Pierre',
    feuille: 'Feuille',
    ciseaux: 'Ciseaux',
};

/**
 * Fonction qui gère la logique de jeu.
 * @param {string} computerChoice
 * @param {string} humanChoice
 * @returns {string}
 */
function playRound(computerChoice, humanChoice) {
    try {
        if (WINS[humanChoice] === computerChoice) {
            humanScore++;
            return `Vous avez gagné ! ${LABELS[humanChoice]} bat ${LABELS[computerChoice]}.`;
        }
        if (WINS[computerChoice] === humanChoice) {
            computerScore++;
            return `Vous avez perdu ! ${LABELS[computerChoice]} bat ${LABELS[humanChoice]}.`;
        }
        return 'Égalité !';
    } catch (erreur) {
        console.error(erreur.message);
    }
}

/**
 * Fonction qui gère la logique après une partie de jeu (O5 manches)
 */
function logicAfterAGame() {
    let allButtons = document.querySelectorAll('main > button');
    for (let j = 0; j < allButtons.length; j++) {
        allButtons[j].disabled = true;
    }
    let newPartButton = document.createElement('button');
    newPartButton.textContent = 'Cliquez ici pour débuter une nouvelle partie';
    let mainPart = document.querySelector('main');
    mainPart.appendChild(newPartButton);
    newPartButton.addEventListener('click', () => {
        for (let j = 0; j < allButtons.length; j++) {
            displayComputerChoice('Ordinateur');
            humanScore = 0;
            computerScore = 0;
            displayScore(computerScore, humanScore);
            allButtons[j].disabled = false;
        }
    });
}

let humanScore = 0;
let computerScore = 0;

/**
 * Fonction de jeu proprement dit.
 */
function playGame() {
    let allButtons = document.querySelectorAll('main > button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', () => {
            let humanChoice = allButtons[i].value.toLowerCase();
            let computerChoice = getComputerChoice();
            displayComputerChoice(computerChoice);

            let message = playRound(computerChoice, humanChoice);
            displayScore(computerScore, humanScore);
            let zoneAffichageResultat = document.querySelector('.zoneAffichageResultat');

            zoneAffichageResultat.innerText = '';
            zoneAffichageResultat.innerText = message;

            if (computerScore == 5) {
                alert("Dommage ! L'ordinateur remporte la Partie.");
                message = '';
                zoneAffichageResultat.innerText = message;
                logicAfterAGame();
            } else if (humanScore == 5) {
                alert('Félicitations 🥳🥳🥳🥳! Vous remportez la Partie.');
                message = '';
                zoneAffichageResultat.innerText = message;
                logicAfterAGame();
            }
        });
    }
}

playGame();
