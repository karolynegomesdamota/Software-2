let year = parseInt(prompt("Enter year: "))
let leap_or_not;

if (((year % 4) === 0) && (((year % 100) !== 0) || ((year % 400) === 0))) {
    leap_or_not = " is a leap year."
}
else {
    leap_or_not = " is not a leap year."
}

document.querySelector("#target").innerHTML = year + leap_or_not;