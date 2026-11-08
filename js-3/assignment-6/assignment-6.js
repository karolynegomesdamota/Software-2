function random_dice_roll() {
    let number = Math.floor((Math.random() * 6) + 1);
    return number;
}

all_results = [];

result = random_dice_roll();
all_results.push(result)

while (result !== 6) {
    result = random_dice_roll();
    all_results.push(result)
}

for (i = 0; i < all_results.length; i++) {
    document.querySelector("#target").innerHTML += `<li>${all_results[i]}</li></br>`
}