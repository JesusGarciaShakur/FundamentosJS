//Funciones con Javascript

/*
function nombre(params){
    body function
}
*/
/** 
 const nombre = function(params){
    body function
 }
 */
// function sin parametros sin retorno
function saluda(){
    console.log('Hellooo!')
}
saluda();

//function con parametros sin retorno
const saludaA = function(name){
    console.log(`Holaaa ${ name }`)
}
saludaA('Batman');

//function con parametros y retorno
const duplica = function(num){
    return num * 2;
}
const doble = duplica(26);
console.log(doble);

//Arrow Function, funciones de flecha ES6
/*
(params) => {
    body function
}
*/
const getFullName = (firstName, lastName) => {
    return firstName + ' ' + lastName;
}
const nombre = getFullName('Patroclo', 'Tlacocuentla');
console.log(nombre);

// Podemos omitir () siempre y cuando tengamos un unico parametro
const minusculas = (word) => {
    return word.toLowerCase();
}
console.log(minusculas('HELLO'))
const mayusculas = word => {
    return word.toUpperCase();
}
console.log(mayusculas('hello'));

// Podemos omitir llaves y return si solo hay una linea
const cuadrado = num => num * num;
console.log(cuadrado(25));