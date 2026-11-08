let name_all_dogs = [];
let name_dog;

for (i = 0; i < 6;  i++) {
    name_dog = prompt("Enter the name of dog number " + [i+1] + ":");
    name_all_dogs.push(name_dog);
}

let alphabetically_ordered = name_all_dogs.sort()
let reverse_alphabetically_order = alphabetically_ordered.reverse()

for (i = 0; i < 6; i++) {
    document.querySelector("#target").innerHTML += `<li>${reverse_alphabetically_order[i]}</li></br>`
}