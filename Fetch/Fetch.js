// Fetch di una card dal db del gioco di carte di Lord of the Rings
async function getCard() {
  try {
    const fetchCard = await fetch("https://ringsdb.com/api/public/cards/");
    const cardJson = await fetchCard.json();

    console.log(cardJson);

    // Nome del personaggi
    const character = cardJson[4].name;
    const $h1 = document.querySelector("#characterName");
    $h1.innerText = character;

    // Immagine del personaggio
    const pic = cardJson[4].imagesrc;
    console.log(pic);
    const $img = document.getElementById("characterPic");
    $img.setAttribute("src", `https://ringsdb.com${pic}`);
  } catch (error) {
    console.log(error);
  }
}

getCard();
