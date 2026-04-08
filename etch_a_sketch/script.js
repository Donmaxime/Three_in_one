const newGridButton = document.getElementById('newGridButton');
const flex_container = document.querySelector('.flex-container');

/**
 *Fonction de création de la grille.
 *Elle permet aussi d'ajouter un event à chaque div de la grille.
 * @param {number} numberOfSquaresPerSide
 */
function createGrid(numberOfSquaresPerSide) {
    const size = 100 / numberOfSquaresPerSide;

    for (let i = 0; i < numberOfSquaresPerSide * numberOfSquaresPerSide; i++) {
        const flex_item = document.createElement('div');
        flex_item.classList.add('flex-item');

        flex_item.style.width = size + '%';
        flex_item.style.height = size + '%';

        flex_container.appendChild(flex_item);
        flex_item.addEventListener('mouseover', () => {
            flex_item.classList.add('colored');
        });
    }
}

newGridButton.addEventListener('click', () => {
    let userChoice = prompt(
        'Vous voulez que la nouvelle grille ait combien de cases par côté ? \nLe nombre de cases ne doit pas dépasser 100.'
    );
    while (userChoice > 100) {
        userChoice = prompt(
            'Vous voulez que la nouvelle grille ait combien de cases par côté ? \nLe nombre de cases ne doit pas dépasser 100.'
        );
    }
    flex_container.innerHTML = '';
    createGrid(userChoice);
});

createGrid(16);
