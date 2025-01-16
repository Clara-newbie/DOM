const ul = document.querySelector("ul");

const addProduct = () => {
  const inputValue = document.querySelector("input").value;
  const li = document.createElement("li");
  ul.appendChild(li);

  li.innerHTML = `<input type="checkbox" /> ${inputValue}`;
  li.style.listStyle = "none";
};
