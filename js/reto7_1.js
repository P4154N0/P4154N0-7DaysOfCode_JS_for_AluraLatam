"use strict";

const pantalla = document.querySelector('.miCalculadora__pantalla');
const botones = document.querySelectorAll('.btn__calc');

botones.forEach(boton => {
  boton.addEventListener('click', () => {
    const botonPresionado = boton.textContent.trim();
    let texto = pantalla.textContent.trim();

    if (boton.id === 'miCalculadora__btn__c') {
      pantalla.textContent = '0';
      return;
    }

    if (boton.id === 'miCalculadora__btn__borrar') {
      if (texto.length === 1 || texto === "ERROR") {
        pantalla.textContent = '0';
      } else {
        pantalla.textContent = texto.slice(0, -1);
      }
      return;
    }

    if (boton.id === 'miCalculadora__btn__igual') {
      try {
        const ultimo = texto.slice(-1);
        
        if ("+-*/.".includes(ultimo)) {
          texto = texto.slice(0, -1);
        }
        pantalla.textContent = eval(texto);
      } catch {
        pantalla.textContent = 'ERROR';
      }
      return;
    }

    if (botonPresionado === '.') {
      const partes = texto.split(/[\+\-\*\/]/);
      const ultimaParte = partes[partes.length - 1];
      if (ultimaParte.includes('.')) return;
    }

    if (texto === 'ERROR') {
      pantalla.textContent = botonPresionado;
      return;
    }

    const ultimo = texto.slice(-1);
    if ("+-*/".includes(ultimo) && "+-*/".includes(botonPresionado)) {
      pantalla.textContent = texto.slice(0, -1) + botonPresionado;
      return;
    }

    if (texto === '0' && botonPresionado === '0') {
      pantalla.textContent = '0';
      return;
    }

    if (texto === '0' && botonPresionado !== '0' && !"+-*/".includes(botonPresionado)) {
      pantalla.textContent = botonPresionado;
      return;
    }

    pantalla.textContent = texto + botonPresionado;
  });
});