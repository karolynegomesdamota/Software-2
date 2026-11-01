
let question = confirm("Should I calculate the square root?")

let text;
let number;

if (question === true) {
    number = parseFloat(prompt("Enter a number: "))
    if (number < 0) {
        text = "The square root of a negative number is not defined."
    }
    if (number >= 0) {
        text = Math.sqrt(number)
    }

}
if (question === false) {
    text = "The square root is not calculated."
}

document.querySelector("#target").innerHTML = text