function concat (array_of_strings){

    let concat_string = "";

    for (i = 0; i < array_of_strings.length; i++) {
        concat_string += array_of_strings[i]
    }

    return concat_string;
}

strings = ["Johnny","DeeDee","Joey","Marky"]

concat_string = concat(strings);

document.querySelector("#target").innerHTML = concat_string