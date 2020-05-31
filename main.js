// Udělej losování klasické Sportky
// Máš osudí čísel od 1 do 48
// Náhodně z tohoto osudí vyber 7 čísel

let vyherniCisla = [];

// Žádné číslo se nesmí v tahu opakovat
// (je vyjmuté z osudí, takže už ho nemůžeš znovu vylosovat)

for (let i = 0; i < 7; i++) {
    let cislo = Math.floor(Math.random() * 48 + 1);
    vyherniCisla.push(cislo);
}


// Z každého vylosovaného čísla vygeneruj následující HTML kód:
// <span class="cislo">8</span>
// ... který pak přidej dovnitř prvku <div id="vyherni-cisla">:

let div = document.querySelector("#vyherni-cisla");
let divContent = "";

for (let j = 0; j < vyherniCisla.length; j++) {
     divContent += `<span class="cislo">${vyherniCisla[j]}</span>`;
}
div.innerHTML += divContent;