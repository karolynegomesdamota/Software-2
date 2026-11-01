let name = prompt("Enter your name: ")

let n = Math.floor(Math.random() * 4) + 1

let house;

if (n === 1) {
    house = "Gryffindor"
}
if (n === 2) {
    house = "Slytherin"
}
if (n === 3) {
    house = "Hufflepuff"
}
if (n === 4) {
    house = "Ravenclaw"
}

document.querySelector("#target").innerHTML = name + ", you are " + house + ".";