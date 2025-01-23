// let parrafo = document.querySelector('p');
// parrafo.innerHTML = 'Indíca un número del 1 al 10';


//funcion para hacer lo que esta arriba pero con menos codigo y que sirva para diferenets elementos.
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // console.log(intentos);
    // console.log(typeof(numeroDeUsuario));
    // console.log(typeof(numeroSecreto));
    // console.log(numeroSecreto);
    // console.log(numeroDeUsuario);
     if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        
     }else {
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        }
        else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
     }
     
    return;
}

function limpiarCaja(){
   document.querySelector('#valorUsuario').value="";
   
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // Si ya sorteamos todos los numeros
    
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números.');

        }else{
            // Si el numero generado esta incluido en la lista 


            if(listaNumerosSorteados.includes(numeroGenerado)){
                return generarNumeroSecreto();
            }else{
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número Secreto');
    asignarTextoElemento('p', `Indíca un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    // limpiar caja 
    limpiarCaja();
    // Indicar mensaje de intervalo de numeros
    // Generar el numero aleatorio
    // inicializar el número de intentos
    condicionesIniciales();
    // Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

// let listaGenerica =[];
// let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');

// function mostrarListas(muestra){
//     return console.log(muestra);
// }
// function mostrarLenguagesSeparadamente() {
//     for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
//       console.log(lenguagesDeProgramacion[i]);
//     }
//   }
//   function mostrarLenguagesReversoSeparadamente() {
//     for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
//       console.log(lenguagesDeProgramacion[i]);
//     }
//   }
  
//   mostrarLenguagesReversoSeparadamente();
//   mostrarLenguagesSeparadamente();

// mostrarListas(lenguagesDeProgramacion);