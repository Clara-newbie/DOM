const $body = document.querySelector("ul").parentElement;
console.log($body);

const secondItem = document.querySelector("ul").children[1];
console.log(secondItem);

const thirdItem = secondItem.nextElementSibling;
console.log(thirdItem);

const firstItem = secondItem.previousElementSibling;
console.log(firstItem);
