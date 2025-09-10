"use strict";

const pantalla = document.querySelector('.miCalculadora__pantalla');
const botones = document.querySelectorAll('.btn__calc');

function getTexto() {
  return pantalla.textContent.trim();
}

function setTexto(valor) {
  pantalla.textContent = valor;
}

function resetearPantalla() {
  setTexto('0');
}

function borrarUltimo() {
  const texto = getTexto();
  if (texto.length === 1 || texto === "ERROR") {
    resetearPantalla();
  } else {
    setTexto(texto.slice(0, -1));
  }
}

function calcular() {
  let texto = getTexto();
  try {
    const ultimo = texto.slice(-1);

    if ("+-*/.".includes(ultimo)) {
      texto = texto.slice(0, -1);
    }
    setTexto(eval(texto));
  } catch {
    setTexto("ERROR");
  }
}

function manejarOperador(op) {
  const texto = getTexto();
  const ultimo = texto.slice(-1);
  if ("+-*/".includes(ultimo)) {
    setTexto(texto.slice(0, -1) + op);
  } else {
    setTexto(texto + op);
  }
}

function manejarNumero(num) {
  let texto = getTexto();

  if (texto === '0' && num === '0') return;

  if (texto === '0' && num !== '0') {
    setTexto(num);
    return;
  }

  if (num === '.') {
    const partes = texto.split(/[\+\-\*\/]/);
    const ultimaParte = partes[partes.length - 1];
    if (ultimaParte.includes('.')) return;
  }

  setTexto(texto + num);
}

function manejarClick(boton) {
  const textoBoton = boton.textContent.trim();
  const id = boton.id;
  const texto = getTexto();

  if (id === 'miCalculadora__btn__c') return resetearPantalla();
  if (id === 'miCalculadora__btn__borrar') return borrarUltimo();
  if (id === 'miCalculadora__btn__igual') return calcular();

  if (texto === 'ERROR') return setTexto(textoBoton);

  if ("+-*/".includes(textoBoton)) return manejarOperador(textoBoton);

  return manejarNumero(textoBoton);
}

botones.forEach(boton => {
  boton.addEventListener('click', () => manejarClick(boton));
});