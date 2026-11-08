let array_of_numbers = [1, 2, 3, 4, 5, 6];

function even(array_of_numbers) {

    even_numbers = [];

    for (i = 0; i < array_of_numbers.length; i++){
        if ((array_of_numbers[i] % 2) === 0) {
            even_numbers.push(array_of_numbers[i]);
        }
    }

    return even_numbers;
}

even(array_of_numbers);

console.log(array_of_numbers);
console.log(even_numbers);