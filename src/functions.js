// Function to start a new game
function startGame(user, gpu) {

    gpu = generateRandom(1, 3);

    if (user != gpu) {
        if (user == 1 && gpu == 3) {
            // console.log('You won with 👊!');
            win++;
        } else if (user == 2 && gpu == 1) {
            // console.log('You won with ✋!');
            win++;
        } else if (user == 3 && gpu == 2) {
            // console.log('You won with 🖖!');
            win++;
        } else {
            // console.log('You lost!');
            lose++;
        }
    } else {
        // console.log('Draw 🤝!');
        draw++;
    }
}

// Generates random number between a min and max range for the GPU.
function generateRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + 1);
}

// Print the result after three matches
function result(win, lose) {
    if (win > lose) {
        console.log(`You won! after three matches you won ${win} wins.`);
    } else if (win == lose) {
        console.log(`It's a draw! both pick the same option trhee times.`);
    } else {
        console.log(`You lost! the GPU beat you ${lose} times out of three.`);
    }
}