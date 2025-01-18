const $btn = document.querySelector(".btn");

// Fai in modo che questi dati si salvino nel local storage
function saveName(name) {
  const nameToStore = document.querySelector(".title-name");
  nameToStore.innerText = name;
  localStorage.setItem("nameToStore", name);
}

// Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome
$btn.addEventListener("click", () => {
  const value = document.querySelector(".firstname").value;
  saveName(value);
});

const StoragedName = localStorage.getItem("nameToStore");

// Controlla che al reload il nome nel titolo non scompaia ???
