let number = (prompt("Enter an integer: "))
let digits = []
let sum = 0

for (let i of number) {
    i = parseInt(i)
    digits.push(i)
}

for (let i = 0; i < digits.length; i++) {
    sum = sum + digits[i]
}

number = parseInt(number)

if ((number % 2 === 0 && number !== 2) || (number % 5 === 0 && number !== 5) || (sum % 3 === 0) || (number % 7 === 0 && number !== 7) || (number === 1)) {
    text = " is not a prime number."
}
else {
    text = " is a prime number."
}

document.querySelector("#target").innerHTML = number + text
