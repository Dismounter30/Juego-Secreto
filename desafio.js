// function mensaje(){
//     console.log('hola, mundo');
//     return;
// }
// function nombre(texto, nombre1){
//     console.log(texto, nombre1);
//     return;
// }
// function numeroDoble(numero){
//     let resultado = parseInt(numero * 2);
//     console.log(resultado);
//     return resultado;
// }
// function generarPromedio(numero1, numero2, numero3){
//     return (numero1+numero2+numero3)/3;
// }
// function mayorDeDosNumeros(num1,num2){
// if(num1 < num2){
//     console.log(num2);
// }else {
//     console.log(num1);
// }
// return;
// }
// function numeroCuadrado(numer){
//     return numer*numer;
// }
// mensaje();
// nombre("¡Hola, ", "Juan!");
// numeroDoble("4");
// let promedio = generarPromedio(4,5,3);
// console.log(promedio);
// mayorDeDosNumeros(7,5);
// let numerCuD=numeroCuadrado(4);
// console.log(numerCuD);





function calcularIMC(altura, peso){
   let imc = parseFloat(peso/(altura*altura));
return imc;
}

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }
  // Ejemplo de uso
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

function dolares(pesos){
    let valor = parseFloat(pesos*4.80);
    console.log(valor);
    return valor;
}
function areaPerimetro(altura, anchura){
    const area = parseFloat(altura * anchura);
    const perimetro = parseFloat((altura + anchura)*2);
    console.log(area);
    console.log(perimetro);
    }

function salaCircular(radio){
    var pi = 3.14;
    var area = pi *(radio * radio);
    var perimetro = pi * (radio + radio);
console.log(area);
console.log(perimetro);
}


function tabla(valor){
    for (var i=1; i <= 10; i++){
        resultado = valor * i;
        console.log(`${valor} * ${i} = ${resultado}`);
    }
}


areaPerimetro('5','4');
dolares(5);
salaCircular(5);

let valor = 4;
tabla(valor);