let n1 = parseInt(prompt("First number:: "));
let n2 = parseInt(prompt("Second number:: "));
let n3 = parseInt(prompt("Third number:: "));

document.querySelector("#target").innerHTML = `
Sum: ${n1 + n2 + n3} <br>
Product: ${n1 * n2 * n3} <br>
Average: ${(n1 + n2 + n3) / 3} <br>
`;