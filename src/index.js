
// 1 = rock, 2 = paper and 3 = scissors
let user = 1;
let gpu = 0;
let win = 0;
let lose = 0;
let draw = 0;
let match = 0;

function gameReady() {
    let selectedPlayer = document.getElementById('button-select-player')
    selectedPlayer.addEventListener('click', () => alert('Working'))
}

window.addEventListener('load', gameReady)

// Ends the cycle after three matches
while (match <= 2) {
    startGame(user, gpu);
    match++;
}

result(win, lose)
