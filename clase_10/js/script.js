//definición de variable
let nombre = "Pablo y tengo 45"; // string o cadena
let edad = 45; // number (integer o int)
let precio = 100.50; // number (float)
let esVerdadero = true; // Tipo Boolean

let nuevaEdad = edad + 1;
// nuevaEdad: estilo camel Case
// nueva_edad: estilo snake Case

//console.log(edad + 1)
nombre = "Diego"; // string
//console.log(nombre)

//console.log("Tengo " + edad + " y en Agosto cumplo " + nuevaEdad)

const PI = 3.1416; // constante no cambia el valor
//console.log(PI)

//PI = 1551515
//console.log(PI)

//Ingreso de datos(Por ahora)
//let valor = prompt("Ingrese nombre y apellido", "pablo");
//console.log(valor)
//let valor = prompt("Ingrese la edad");
//valor = parseFloat(valor)
//console.log(valor)

//Operadores
let num1 = 11;
let num2 = 2;
let suma = num1 + num2;
console.log(suma)
let resta = num1 - num2;
console.log(resta)
let multi = num1 * num2;
console.log(multi)
let modulo = num1 % num2;
console.log(modulo)
//Si el valor del modulo es 0, sig que el numero es par, si es 1 es impar

let x = 5;
x += 3; // x es ahora 8
x = x + 3; // x es ahora 8, ambas son lo mismo
//console.log(x)
x *= 2; // x es ahora 16
//console.log(x)
let num3 = 3;
let num4 = 3;
console.log(num3 >= num4)

console.log(5 > 2 || 6==2)