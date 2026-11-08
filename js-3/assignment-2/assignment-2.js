let number_participants = parseInt(prompt("Enter the number of participants: "))
let name_participants = [];
let ask_name;

for (i = 0; i < number_participants; i++) {
    ask_name = prompt("Enter the name of the participant number " + [i+1] + ": ");
    name_participants.push(ask_name);
}

let alphabetically_ordered = name_participants.sort()

for (i = 0; i < number_participants; i++) {
    document.querySelector("#target").innerHTML += `<li>${alphabetically_ordered[i]}</li></br>`
}