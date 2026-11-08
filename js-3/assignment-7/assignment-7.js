let number_of_sides = parseInt(prompt("Enter number of sides: "))

function random_dice_roll(number_of_sides) {
    let number = Math.floor((Math.random() * number_of_sides) + 1);
    return number;
}

all_results = [];

result = random_dice_roll(number_of_sides);
all_results.push(result)

while (result !== number_of_sides) {
    result = random_dice_roll(number_of_sides);
    all_results.push(result)
}

for (i = 0; i < all_results.length; i++) {
    document.querySelector("#target").innerHTML += `<li>${all_results[i]}</li></br>`
}