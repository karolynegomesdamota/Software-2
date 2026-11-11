let form = document.querySelector("form");

function submit(event) {

    event.preventDefault()

    let first_name = document.querySelector("input[name=firstname]").value;
    let last_name = document.querySelector("input[name=lastname]").value;

    document.querySelector("#target").innerHTML = ` Your name is ${first_name} ${last_name} `
}

form.addEventListener("submit", submit);