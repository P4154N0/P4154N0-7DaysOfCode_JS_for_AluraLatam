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

  function normalize(input) {
    if (!input) return "";
    return input
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "")
      .replace(/-/g, "");
  }

  const comentarios = {
    "react": "React: librería basada en componentes. Ideal para interfaces interactivas.",
    "vue": "Vue: framework progresivo y sencillo para empezar rápido y escalar.",
    "c#": "C#: fuerte en backend y aplicaciones .NET, muy usado en entornos corporativos.",
    "csharp": "C#: (alias) Fuerte en backend y aplicaciones .NET.",
    "java": "Java: robusto y multiplataforma, clásico en backend y grandes sistemas.",
    "node": "Node.js: JavaScript en servidor — perfecto si ya conocés JS del frontend.",
    "python": "Python: versátil, excelente para backend, data y scripting.",
    "docker": "Docker: contenedores que facilitan el despliegue y la reproducibilidad.",
    "aws": "AWS: servicios en la nube muy usados en empresas.",
    "kubernetes": "Kubernetes: orquestación de contenedores a escala (curva de aprendizaje más alta).",
    "sql": "SQL: base para trabajar con bases de datos relacionales."
  };

  function startGame() {
    consolaDiv.innerHTML = "";
    writeConsole("🔸 Juego iniciado");


    let areaRaw = prompt("¿Querés seguir hacia el área de Front-End o Back-End? (Escribí 'Front-End' o 'Back-End')");
    if (areaRaw === null) {
      writeConsole("El juego fue cancelado por el usuario.", "warn");
      return;
    }
    let area = normalize(areaRaw);

    while (area !== "frontend" && area !== "backend") {
      areaRaw = prompt("Por favor escribí 'Front-End' o 'Back-End' (ej: Front-End):");
      if (areaRaw === null) {
        writeConsole("El juego fue cancelado por el usuario.", "warn");
        return;
      }
      area = normalize(areaRaw);
    }
    writeConsole(`Elegiste área: ${ area === "frontend" ? "Front-End" : "Back-End" }`);

    let principal = "";
    if (area === "frontend") {
      let techRaw = prompt("Estás en Front-End. ¿Querés aprender React o Vue?");
      if (techRaw === null) {
        writeConsole("El juego fue cancelado por el usuario.", "warn");
        return;
      }
      let tech = normalize(techRaw);
      while (tech !== "react" && tech !== "vue") {
        techRaw = prompt("Escribe 'React' o 'Vue':");
        if (techRaw === null) {
          writeConsole("El juego fue cancelado por el usuario.", "warn");
          return;
        }
        tech = normalize(techRaw);
      }
      principal = tech === "react" ? "React" : "Vue";
      writeConsole(`Perfecto: elegiste ${principal} en Front-End.`);

      if (principal === "React")
        writeConsole("Mensaje: React es excelente para interfaces complejas y tiene un ecosistema muy amplio.");
      else
        writeConsole("Mensaje: Vue es ligero, fácil de aprender y potente para crear UIs reactivas.");
    } else {
      let techRaw = prompt("Estás en Back-End. ¿Querés aprender C# o Java?");
      if (techRaw === null) {
        writeConsole("El juego fue cancelado por el usuario.", "warn");
        return;
      }
      let tech = normalize(techRaw);
      while (tech !== "c#" && tech !== "csharp" && tech !== "java") {
        techRaw = prompt("Escribe 'C#' o 'Java':");
        if (techRaw === null) {
          writeConsole("El juego fue cancelado por el usuario.", "warn");
          return;
        }
        tech = normalize(techRaw);
      }
      principal = (tech === "java") ? "Java" : "C#";
      writeConsole(`Perfecto: elegiste ${principal} en Back-End.`);

      if (principal === "C#")
        writeConsole("Mensaje: C# es potente en ecosistema .NET y para aplicaciones empresariales.");
      else
        writeConsole("Mensaje: Java es estable, portable y muy usado en sistemas a gran escala.");
    }

    let caminoRaw = prompt(`¿Querés seguir especializándote en ${principal} o convertirte en Fullstack? (Escribí 'especializarse' o 'fullstack')`);
    if (caminoRaw === null) {
      writeConsole("El juego fue cancelado por el usuario.", "warn");
      return;
    }
    let camino = normalize(caminoRaw);
    while (camino !== "especializarse" && camino !== "fullstack") {
      caminoRaw = prompt("Escribe 'especializarse' o 'fullstack':");
      if (caminoRaw === null) {
        writeConsole("El juego fue cancelado por el usuario.", "warn");
        return;
      }
      camino = normalize(caminoRaw);
    }
    if (camino === "especializarse") {
      writeConsole(`Has elegido especializarte en ${principal}. Te volverás muy fuerte en esa área.`);
    } else {
      writeConsole("Has elegido convertirte en Fullstack. Aprenderás tecnologías complementarias de frontend y backend.");
    }

    let tecnologiasExtras = [];
    let continuar = "ok";
    while ((continuar || "").toLowerCase() === "ok") {
      let nueva = prompt("¿Qué otra tecnología te gustaría aprender? (Escribí el nombre)");
      if (nueva === null) {
        writeConsole("Entrada de tecnologías cancelada por el usuario.", "warn");
        break;
      }
      nueva = nueva.trim();
      if (!nueva) {
        writeConsole("No ingresaste ninguna tecnología. Se salta.", "warn");
      } else {
        tecnologiasExtras.push(nueva);
        const key = nueva.toLowerCase().replace(/\s+/g, "");
        const comentario = comentarios[key] || `¡${nueva} es una gran elección! Aprenderla puede abrirte muchas puertas.`;
        writeConsole(`Tecnología añadida: ${nueva}`);
        writeConsole(`Comentario: ${comentario}`);
      }
      
      continuar = prompt("¿Hay alguna otra tecnología que te gustaría aprender? (Escribí 'ok' para continuar o cualquier otra cosa para terminar)");
      if (continuar === null) {
        writeConsole("Entrada de continuación cancelada por el usuario.", "warn");
        break;
      }
    }

    writeConsole("===== Resumen final =====");
    writeConsole(`Área: ${ area === "frontend" ? "Front-End" : "Back-End" }`);
    writeConsole(`Tecnología principal elegida: ${principal}`);
    writeConsole(`Camino elegido: ${ camino === "especializarse" ? "Especializarse" : "Fullstack" }`);

    if (tecnologiasExtras.length === 0) {
      writeConsole("No se agregaron tecnologías extra.");
    } else {
      writeConsole("Otras tecnologías que te interesan:");
      for (let i = 0; i < tecnologiasExtras.length; i++) {
        writeConsole(`${i + 1}. ${tecnologiasExtras[i]}`);
      }
    }

    alert("Juego finalizado. Revisa el resumen en la consola de la página.");
  }

  startBtn.addEventListener("click", startGame);
});