
//Guess The Right Number Game:

function guessTheRightNumber() {
    let randomNumber = Math.floor(Math.random() * 100);
    let counter = 0;
    let userNumber;
    while (userNumber != randomNumber) {
        userNumber = Number(prompt("Guess The Right Number:"));
        counter++;

        if (userNumber == randomNumber) {
            alert("U gussed It in " + counter + "times");
            return counter;
        }
        else if (userNumber > randomNumber) {
            alert("The Right Number Is Lower");
        }
        else {
            alert("The Right Number Is Higher");
        }
    }

    return "game over";
}

console.log(guessTheRightNumber());






