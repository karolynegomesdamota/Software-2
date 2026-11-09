const ul = document.querySelector("#target");

let create_li_1 = document.createElement("li");
let create_li_2 = document.createElement("li");
let create_li_3 = document.createElement("li");

let text1 = document.createTextNode("First item");
let text2 = document.createTextNode("Second item");
let text3 = document.createTextNode("Third item");

create_li_1.appendChild(text1);
create_li_2.appendChild(text2);
create_li_3.appendChild(text3);

ul.appendChild(create_li_1);
ul.appendChild(create_li_2);
ul.appendChild(create_li_3);

document.querySelector("li:nth-child(2)").classList.add("my-item");

/* :nth-child() is a CSS selector that allows you to select an element based on its position among its siblings (elements that share the same parent). */