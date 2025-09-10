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

    let categorias = {
      "Frutas":[],
      "Verduras":[],
      "Lácteos":[],
      "Congelados":[],
      "Dulces":[],
      "Bebidas":[]
    }

    let cantidadDeCategorias = Object.keys(categorias).length;
    
    let idDeCategorias = [];
    for (let i = 0; i < cantidadDeCategorias; i++) {
      idDeCategorias.push(String(i+1));
    }

    let continuar = true;

    writeConsole("🔸📝 Lista de supermercado 🛍️");
    writeConsole("---------------------------------");

    while (continuar) {
      let producto = prompt("Ingrese el nombre del producto:");

      if (producto === null) {
        writeConsole("El usuario canceló la carga.", "warn")
        return;
      } else {

        if (producto.trim() === "") {
          alert("⚠️ El producto no puede estar vacío!");
          continue;
        }

        let categoria = prompt(
          "Seleccione la categoría del producto:\n" +
          "1. Frutas\n" +
          "2. Verduras\n" +
          "3. Lácteos\n" +
          "4. Congelados\n" +
          "5. Dulces\n" +
          "6. Bebidas");

        categoria = String(categoria);
        
        while (!idDeCategorias.includes(categoria)) {
          alert(`⚠️ Entrada inválida ❌. Debes ingresar un número del 1 al ${cantidadDeCategorias}.`);
          
          categoria = prompt(
          "Seleccione la categoría del producto:\n" +
          "1. Frutas\n" +
          "2. Verduras\n" +
          "3. Lácteos\n" +
          "4. Congelados\n" +
          "5. Dulces\n" +
          "6. Bebidas");
          
          if (categoria === null) {
            return;
          }

          categoria = String(categoria);
        }
        
        switch (categoria) {
          case "1":
            categorias["Frutas"].push(producto);
            break;
          case "2":
            categorias["Verduras"].push(producto);
            break;
          case "3":
            categorias["Lácteos"].push(producto);
            break;
          case "4":
            categorias["Congelados"].push(producto);
            break;
          case "5":
            categorias["Dulces"].push(producto);
            break;
          case "6":
            categorias["Bebidas"].push(producto);
            break;
          default:
            writeConsole(`Categoria ${categoria} no válida. Producto no agregado.`);
            break;
        }

        continuar = confirm("¿Desea agregar otro producto?");
      }
    }

    for (let cat in categorias) {
      if (categorias[cat].length > 0) {
        writeConsole(`${cat}: ${categorias[cat].join(", ")}`);
      } else {
        writeConsole(`${cat}: (vacío)`);
      }
    }   
  }

  startBtn.addEventListener("click", startChallenge);
});