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

    writeConsole("🔸 Reto 4 - 🎮 Juego del Número Secreto 🔢🕵️🎯");
    writeConsole("-------------------------------------------------");

    let minimo = 0;
    let maximo = 10;
    let intentos = 3;

    let numeroSecreto = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
    console.log("Número secreto:", numeroSecreto);

    alert("🙂 Bienvenido al juego del número secreto!!!");
    let nombre = prompt("¿Cual es tu nombre?");
    
    if (nombre === null) {
      writeConsole("El usuario canceló el juego.");
      return;
    }

    while (nombre.trim() === "") {
      nombre = prompt("El nombre ingresado no puede ser vacío. Por favor, ingresa tu nombre:");
      if (nombre === null) {
        writeConsole("El usuario canceló el juego.");
        return;
      }
    }
      
    let intentoActual = 1;

    while (intentos > 0) {
      let numeroElegido = prompt(`Hola ${nombre}, te quedan ${intentos} intentos, Ingresa un número:`);

      if (numeroElegido === null) {
        writeConsole("El usuario canceló el juego.");
        return;
      }

      numeroElegido = Number(numeroElegido);

      if (isNaN(numeroElegido)) {
        writeConsole("⚠️ Entrada inválida ❌. Debes ingresar un número.");
        continue;
      }

      if (numeroSecreto === numeroElegido) {
        writeConsole(`Intento ${intentoActual}: ${numeroElegido} ✅`);
        writeConsole(`¡Felicitaciones!! El número '${numeroElegido}' es el número secreto 🎉✅🏆`);
        return;
      } else {
        writeConsole(`Intento ${intentoActual}: ${numeroElegido} ❌`);
        intentos--;
        intentoActual++;
      }

      if (intentos === 0) {
        writeConsole(`Se acabaron los intentos 😢. El número secreto era: '${numeroSecreto}' ❌.`);
        return;
      }
    }
  } 

  startBtn.addEventListener("click", startChallenge);
});
