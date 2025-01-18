const $btn = document.querySelector(".btn");

// Fai in modo che nello span venga inserito il testo che si è inserito nell'input nome
$btn.addEventListener("click", () => {
  const value = document.querySelector(".firstname").value;
  saveName(value);
});

// Fai in modo che questi dati si salvino nel session storage
function saveName(name) {
  const nameToStore = document.querySelector(".title-name");
  nameToStore.innerText = name;
  sessionStorage.setItem("nameToStore", name);
}

const StoragedName = sessionStorage.getItem("nameToStore");
