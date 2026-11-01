let start_year = prompt("Start year: ")
let end_year = prompt("End year: ")
let year;

let year_difference = end_year - start_year
console.log(year_difference)

let leap_years = []
console.log(leap_years)

for (let year = start_year; year < end_year; year++) {
    if (((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400) === 0))) {
        leap_years.push(year)
    }
}

console.log(leap_years)

document.querySelector("#target").innerHTML = `<li>${leap_years}</li>`

/* Formatting is not alright, fix later. */