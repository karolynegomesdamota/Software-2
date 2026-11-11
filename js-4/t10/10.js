let form = document.querySelector("form");

function submit(event) { /* JS provides the event object automatically. I just need to give it a name (can be 'event' or something else) so I can access it inside the function. The browser knows that the first parameter of your function should receive the event object because of how addEventListener() works*/

    event.preventDefault()

    let first_name = document.querySelector("input[name=firstname]").value;
    let last_name = document.querySelector("input[name=lastname]").value;

    document.querySelector("#target").innerHTML = ` Your name is ${first_name} ${last_name} `
}

form.addEventListener("submit", submit);