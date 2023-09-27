//Strings en Javascript

let miString = "Este es un Texto " + 'de Prueba'
console.log(miString);

console.log(miString.charAt(5));
console.log(miString.endsWith('a'));
console.log(miString.length);
console.log(miString.repeat(2));
console.log(miString.toLowerCase());
console.log(miString.toUpperCase());

console.log("I'm Shakur");

console.log('I\'m Shakur')

//Strings Multilinea
const menu = `
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;
//Comilla francesa ` (Backtick)
console.log(menu);

//Strings Templates
//placeholder %{}

const name = 'Peter';
const superhero = 'SpiderMan'
const age = 20;

console.log("Soy " + name + " soy " + superhero + ' y tengo ' + age + ' años');
console.log(`Soy ${ name } soy ${ superhero } y tengo ${ age } años`);