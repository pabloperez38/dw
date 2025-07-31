let edad = 10;
if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("Eres menor de edad.");
}

let hora = 21;
if (hora >= 6 && hora <= 12) {
  console.log("Buenos días");
} else if (hora >= 13 && hora <= 18) {
  console.log("Buenas tardes");
} else {
  console.log("Buenas noches");
}
//Operador ternario
let esMayor = edad >= 18 ? "Mayor de edad" : "Menor de edad";
console.log(esMayor);

//Switch
let dia = 4;
switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Día no válido");
}

let edad2 = 25;
let licencia = true;
if (edad2 >= 18 && licencia)  {
 console.log("Puedes conducir.");
} else {
 console.log("No puedes conducir.");
}
//For para saber cuantas vueltas damos

for (let i = 0; i <= 5; i++) {
 console.log(i);
}
console.log("-------------------")
//While
let i = 0;
while (i < 5) {
 console.log(i);
 i++;
}
console.log("-------------------")
//do While
let j = 0;
do {
 console.log(j);
 j++;
} while (i < 5);
