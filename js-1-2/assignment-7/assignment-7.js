let number_rolls = parseInt(prompt("Enter number of dice rolls: "))
let result;
let all_results = []
let sum = 0;

while (number_rolls > 0) {
    result = Math.floor(Math.random() * 6) + 1
    all_results.push(result)
    number_rolls -= 1
}

for (let i = 0; i < all_results.length; i++) {
    sum = sum + all_results[i]
}

 document.querySelector("#target").innerHTML = sum


