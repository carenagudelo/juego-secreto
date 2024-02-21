let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  console.log(intentos);
  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //el usuartio no acerto
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor");
    }
    intentos++;
    limpiarCaja();
  }

  return;
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //si ya sorteamos todos los numeros
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles");
    return;
  } else {
    //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del numero secreto");
  asignarTextoElemento("p", `Indica un numero del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() {
  //limpiar la caja
  limpiarCaja();
  //indicar mensaje de intervalo de numeros
  //Generar el numero aleartorio
  //inicializar el numero de intentos
  condicionesIniciales();
  //deshabilitar el boton de nuevo juego
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

condicionesIniciales();

/******************************************************************************************* */

let listaGenerica = [];
let lenguajesDeProgramacion = ["javascript", "c", "c++", "kotlin", "phyton"];
lenguajesDeProgramacion.push("java", "ruby", "golang");

function listaLenguajes(lenguajes) {
  return lenguajes.reverse();
}

console.log(listaLenguajes(lenguajesDeProgramacion));

let listaNumeros = [1, 2, 3];

function posicionLista(lista, posicion) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === posicion) {
      return i;
    }
  }
  return -1;
}

console.log(posicionLista(listaNumeros, 2));

function sumarListas(lista1, lista2) {
  if (lista1.length !== lista2.length) {
    console.log(`Las listas deben tener la misma longitud`);
    return null;
  }

  const sumaLista = [];

  for (let i = 0; i < lista1.length; i++) {
    sumaLista.push(lista1[i] + lista2[i]);
  }

  return sumaLista;
}

let lista1 = [1, 5, 3, 9];
let lista2 = [2, 2, 2, 1];

console.log(sumarListas(lista1, lista2));

function cuadradoNumeros(lista) {
  let listaCuadrados = [];

  for (let i = 0; i < lista.length; i++) {
    listaCuadrados.push(lista[i] * lista[i]);
  }
  return listaCuadrados;
}

let array = [2, 3, 4];
console.log(cuadradoNumeros(array));
