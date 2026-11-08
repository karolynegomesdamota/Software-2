let numbers;
let array_of_numbers = [];

for (let i = 0; i < 5; i++) {
    numbers = parseFloat(prompt("Enter a number: "));
    array_of_numbers.push(numbers);
};

for (let i = 5; i >= 0; i--) {
    console.log("This is " + array_of_numbers[i]);
};