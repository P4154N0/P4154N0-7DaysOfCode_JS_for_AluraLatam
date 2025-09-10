"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const consolaDiv = document.getElementById("miConsola");

  function writeConsole(text, type = "log") {
    
    if (type === "warn") console.warn(text);
    else if (type === "err") console.error(text);
    else console.log(text);


    const line = document.createElement("div");
    line.className = type;
    line.textContent = text;
    consolaDiv.appendChild(line);
    consolaDiv.scrollTop = consolaDiv.scrollHeight;
  }

  function startChallenge() {
    consolaDiv.innerHTML = "";

    let numeroUno = 1;
    let stringUno = '1';
    let numeroTreinta = 30;
    let stringTreinta = '30';
    let numeroDiez = 10;
    let stringDiez = '10';

    let stringYNumeros = "let numeroUno = 1; \nlet stringUno = '1';\nlet numeroTreinta = 30; \nlet stringTreinta = '30'; \nlet numeroDiez = 10; \nlet stringDiez = '10';";
    
    writeConsole("🔸 Operadores de comparación!");
    writeConsole("---------------------------------");
    writeConsole(stringYNumeros);
    writeConsole("---------------------------------");

    if (numeroUno == stringUno) {
      writeConsole("- Las variables numeroUno y stringUno tienen el mismo valor, tero tipos diferentes.");
    } else {
      writeConsole("- Las variables numeroUno y stringuno no tienen el mismo valor.");
    }

    writeConsole("---------------------------------");

    if (numeroTreinta === stringTreinta) {
      writeConsole("- Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo.");
    } else {
      writeConsole("- Las variables numeroTreinta y stringTreinta no tienen el mismo tipo.");
    }

    writeConsole("---------------------------------");

    if (numeroDiez !== stringDiez) {
      writeConsole("- Las variables numeroDiez y stringDiez tienen el mismo valor, pero distinto tipo.");
    } else {
      writeConsole("- Las variables numeroDiez y stringDiez no tienen el mismo valor.");
    }    

  }

  startBtn.addEventListener("click", startChallenge);
});

