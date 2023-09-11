//Versiones anteriores a ES6 era var
var miVariable;;

// de ES6 en adelante
//const y let

//const declara constantes, no permite reasignación
//Al crearla debe inicializarse
const PI = 3.1416;
//PI = 3.28;

//let declara variables 
//permite la reasignación
//se puede declarar y luego inicializar
//JS detecta automaticamente ek tipo de dato
let firstname;
console.log(firstname);
firstname = 'Peter Parker';
console.log(firstname);
console.log(typeof(firstname));

firstname = 18;
console.log(firstname);
console.log(typeof(firstname))