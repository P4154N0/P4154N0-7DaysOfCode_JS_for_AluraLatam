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

    writeConsole("🔸 Utilizando alert() & prompt()");
    writeConsole("---------------------------------");

    let nombre = prompt("- ¿Cuál es tu nombre?");
    writeConsole(`Hola ${nombre}!`);
    let edad = prompt(`- ${nombre}, ¿cuantos años tienes?`);
    writeConsole(`${nombre}, ya se que tienes ${edad} años, contimuemos.`);
    let lenguaje = prompt("¿Que lenguaje de programación estas estudiando?");
    writeConsole(`${lenguaje}, es una excelente opción!`);

    writeConsole("---------------------------------");
    writeConsole(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}.`);
    writeConsole("---------------------------------");

    let respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con un 1 para SÍ o 2 para NO.`);

    if (respuesta == 1) {
      writeConsole("1 > ¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
    } else {
      writeConsole("2 > Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    }
  }

  startBtn.addEventListener("click", startChallenge);
});