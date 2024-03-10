let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 5;

function asignarTextoElemento(elemento, texto) {
  let elemntoHTML = document.querySelector(elemento);
  elemntoHTML.innerHTML = texto;
  return;
}

function verificarNumero() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroSecreto === numeroUsuario) {
    asignarTextoElemento(
      "p",
      `¡Acertaste el número en ${intentos} ${
        intentos == 1 ? "intento" : "intentos"
      }!`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    //El usuario falló:
    if (numeroSecreto > numeroUsuario) {
      asignarTextoElemento("p", "Ingresaste un número menor");
    } else {
      asignarTextoElemento("p", "Ingresaste un número mayor");
    }
    limpiarCaja();
    intentos++;
  }
  return;
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego de número secreto");
  asignarTextoElemento("p", `Indica un número entre 1 y ${numeroMaximo}:`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function reiniciarJuego() {
  condicionesIniciales();
  limpiarCaja();
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya llegamos al número máximo
  if (listaNumerosSorteados.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si aún no llegamos al número máximo
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

condicionesIniciales();
