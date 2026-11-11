let button = document.querySelector("#start");

let result;

function calculation (){

    let calculation = document.querySelector("#calculation").value;
    let split;
    let num1;
    let num2;

    if (calculation.includes("+") === true) {
        split = calculation.split("+");
        num1 = Number(split[0])
        num2 = Number(split[1])
        result = num1 + num2
    }
    else if (calculation.includes("-") === true) {
        split = calculation.split("-");
        num1 = Number(split[0])
        num2 = Number(split[1])
        result = num1 - num2
    }
    else if (calculation.includes("*") === true) {
        split = calculation.split("*");
        num1 = Number(split[0])
        num2 = Number(split[1])
        result = num1 * num2
    }
    else if (calculation.includes("/") === true) {
        split = calculation.split("/");
        num1 = Number(split[0])
        num2 = Number(split[1])
        result = num1 / num2
    }

    document.querySelector("#result").innerHTML = result
}

button.addEventListener("click", calculation);