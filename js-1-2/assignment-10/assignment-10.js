
let number_of_dice = parseInt(prompt("Enter the number of dice: "));
let sum_of_interest = parseInt(prompt("Enter the sum of the eyes: "));

let count = 0; /* to count how many times the dice produces the sum requested by the user */
let sum; /* to calculate the total of all dice rolled in each round */
let dice; /* to store the result of each roll of the dice */
let repetitions = 10000;

for (let i = 0; i < repetitions; i++) {
    sum = 0; /* to reset the sum to 0 for each round */

    for (let j = 0; j < number_of_dice; j++) {
        dice = Math.floor(Math.random() * 6) + 1;
        sum = sum + dice;
    }

    if (sum === sum_of_interest) {
        count += 1;
    }
}

let probability = (count / repetitions) * 100;

document.querySelector("#target").innerHTML = "Probability to get sum " + sum_of_interest + " with " + number_of_dice + " dice is " + probability + "%"
