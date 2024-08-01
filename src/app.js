/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const generateExcuseButton = document.getElementById("generate-excuse");
  const excuseParagraph = document.getElementById("excuse");
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  let excuses = [];

  // Genera las excusas
  for (let i = 0; i < who.length; i++) {
    for (let j = 0; j < action.length; j++) {
      for (let k = 0; k < what.length; k++) {
        for (let l = 0; l < when.length; l++) {
          let domain = `${who[i]} ${action[j]} ${what[k]} ${when[l]}`;
          excuses.push(domain);
        }
      }
    }
  }

  // Función para generar una excusa aleatoria
  function generateExcuse() {
    const randomIndex = Math.floor(Math.random() * excuses.length);
    const randomExcuse = excuses[randomIndex];
    excuseParagraph.innerHTML = randomExcuse;
  }

  // Asocia el evento click al botón
  generateExcuseButton.addEventListener("click", generateExcuse);
};
