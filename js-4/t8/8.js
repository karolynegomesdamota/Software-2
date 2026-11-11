let button = document.querySelector("#start");

let result;

function calculation (){

    let num1 = Number(document.querySelector("#num1").value);  /* This has to go here to capture the value when the button is clicked. */
    let num2 = Number(document.querySelector("#num2").value);  /* This has to go here to capture the value when the button is clicked. */

    let operation = document.querySelector("#operation").value; /* This has to go here to capture the value when the button is clicked. */

    if (operation === "add") {
        result = num1 + num2
    }
    else if (operation === "sub") {
        result = num1 - num2
    }
    else if (operation === "multi") {
        result = num1 * num2
    }
    else if (operation === "div") {
        result = num1 / num2
    }

    document.querySelector("#result").innerHTML = result /* This needs to go inside the function since we need it to run only after the button is click (when the values have been given) */
}

button.addEventListener("click", calculation);