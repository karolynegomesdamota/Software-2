let all_numbers = [];

let number = parseInt(prompt("Enter a number: "))

while (all_numbers.includes(number) === false) {
    all_numbers.push(number)
    number = parseInt(prompt("Enter a number: "))
}

console.log("The number has already been given.")

let sort_whole_number = all_numbers.sort((a, b) => b - a);
let ascending_order = sort_whole_number.reverse()

console.log(ascending_order)