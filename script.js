"use strict";

// Elementos
const BTN_GENERATE_QUOTE = document.getElementById("btn-generate");
const QUOTE = document.querySelector(".quote");
const QUOTE_AUTHOR = document.querySelector(".author");

// CONTENEDOR DE LAS BOMBAS

const BOMBAS = {
  Mónica:
    "Cuando vayas a Tulúm, nunca nades boca abajo; porque hay un tiburón que te puede comer lo de abajo.",
  Darwin:
    "Suegra, tu hija parece una flor de hierbabuena, porque arriba tiene la flor y abajo la cosa buena. ¡BOMBA!",
  Andres:
    "Corazoncito de elote, mejillas de agua con sal, te amo así de grandote, ya vente pa mi jacal.",
  Chuco:
    "Del cielo cayó un pañuelo bordado con seda negra, aunque tu padre no quiera, tu madre será mi suegra.",
  Kamiganzo:
    "Mestiza bella y galana de Yucatán linda flor, tu hermosura meridiana hace que cada mañana viva soñando en tu amor.",
  Poke: "A Yucatán llegué yo un día, y en ti mis ojos posé, ahora yucateca mía, no puedo vivir sin usted. (Juan Ortiz)",
  Churros:
    "Mi perro me mira extraño, el loro, también la gata, notaron el gran tamaño del amor que te tengo, flaca. ¡Bomba! (Juan Ortiz)",
  Anna: "Yo no amo por interés, tampoco amo al dinero, pero no me vengas a ver si no traes lo que yo quiero. ¡Bomba! (Juan Ortiz)",
};

// NOTE: Función para generar de manera aleatoria las bombas
// const getQuote = (obj) => {
//   // Acceder a la propiedad del objeto para generar autor
//   let author = Object.keys(obj);
//   //   console.log(author);

//   // Acceder al valor de la propiedad del objeto para obtener bomba
//   let quote = Object.values(obj);
//   //   console.log(quote);

//   // Posición random
//   let randomPosition = Math.floor(Math.random() * author.length);
//   //   console.log(randomPosition);

//   let authorBueno = `-${author[randomPosition]}`;
//   console.log(authorBueno);

//   QUOTE.textContent = quote[randomPosition];
//   QUOTE_AUTHOR.textContent = `-${author[randomPosition]}`;
// };

// getQuote(BOMBAS);

BTN_GENERATE_QUOTE.addEventListener("click", function () {
  // Acceder a la propiedad del objeto para generar autor
  let author = Object.keys(BOMBAS);
  //   console.log(author);

  // Acceder al valor de la propiedad del objeto para obtener bomba
  let quote = Object.values(BOMBAS);
  //   console.log(quote);

  // Posición random
  let randomPosition = Math.floor(Math.random() * author.length);
  //   console.log(randomPosition);

  QUOTE.textContent = `"${quote[randomPosition]}" 💣`;
  QUOTE_AUTHOR.textContent = `- ${author[randomPosition]}`;
});
