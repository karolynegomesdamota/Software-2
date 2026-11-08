let number = parseFloat(prompt("Enter a number: "));
let all_numbers = [];
all_numbers.push(number);

while (number !== 0) {
    number = parseFloat(prompt("Enter a number: "));
    all_numbers.push(number);
}

all_numbers = all_numbers.sort((a, b) => b - a);

console.log(all_numbers);