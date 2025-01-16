const body = document.querySelector("body");
const btn = document.querySelector(".btn");
// avevo usato getElementByClassNAmes, ma restituisce una HTML collection

btn.addEventListener("click", () => {
  body.classList.toggle("theme");
});
