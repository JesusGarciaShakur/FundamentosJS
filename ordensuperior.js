// Funciones de orden superior
// high order functions
/*
Funciones que reciben 
funciones como parametros
*/

const myFunction = () => {
    console.log(' Ejecuta mi función ');
}

myFunction();
const sameFunction = myFunction;
sameFunction();

const otherSameFunction = myFunction;
otherSameFunction();

const funOne = () => {
    console.log(' Ejecuta función One ');
}

const funTwo = (username) => {
    console.log(' Ejecuta función Two ');
    console.log(' HOLAAAA ' + username);
}

const funThree = (otherFunction) => {
    console.log(' Inicia funcón 3 ');
    otherFunction();
    console.log(' Termina la función 3 ');
}

funOne();
funTwo(' ISRA ');
funTwo(' Kalvin Klein ');
funThree(funOne);
funThree(() => console.log(' Soy una Arrow Function '));