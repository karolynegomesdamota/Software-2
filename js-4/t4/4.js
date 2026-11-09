'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];

const select = document.querySelector("#target");

let create_option;
let name;

for (let i = 0; i < students.length; i++ ) {
  create_option = document.createElement("option");

  students.name = document.createTextNode(students[i].name);

  create_option.appendChild(students.name);

  select.appendChild(create_option);

  create_option.value = students[i].id;
};