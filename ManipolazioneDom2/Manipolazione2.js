/* 
Recuperare il valore di ciascun campo di input e creare un oggetto person contenente le proprietà: firstName, lastName e age.

Infine recuperare l'elemento form e aggiungere l'attributo data-person contenente l'oggetto person in formato json 
*/

const firstName = document.getElementById("firstName").value;
const lastName = document.getElementById("lastName").value;
const age = document.getElementById("age").value;

const person = { firstName, lastName, age };

const $form = document.querySelector("form");
$form.setAttribute("data-person", JSON.stringify(person));
