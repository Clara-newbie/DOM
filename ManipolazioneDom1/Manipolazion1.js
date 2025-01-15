const ul = document.querySelector("ul");

const addProduct = () => {
  const li = document.createElement("li");
  ul.appendChild(li);
  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  li.appendChild(input);
  // COME INSERISCO IL TESTO SENZA PERDERE LA CHECKBOX ?
  li.style.listStyle = "none";
};

console.log(addProduct);

/* non mi è del tutto chiaro come faccia a funzionare senza un return */
