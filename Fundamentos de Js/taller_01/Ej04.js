// cambio de fuente de toda la pagina
document.body.style.fontFamily = 'Arial Black'

let nombre, edad, direccion, movil, email, dinero; // se puede declara varia variables del mismo tipo

// promt es una palabra reservada en JavaScript que de función y sale un mensaje de tipo alerta para el usurio.

nombre = prompt('escribe su nombre: ') //pedir datos al usurio.
document.writeln('Bienvenido: ', nombre, '<br>');
console.log("Bienvenido: ", nombre);

edad = prompt('Escriba su edad: ') // pedir datos al usurio.
document.writeln('tu edad es: ', edad, '<br>');
console.log("tu edad es: ", edad);

direccion = prompt('escriba su direccion: ')// pedir datos al usurio.
document.writeln('tu direccion es: ', direccion, '<br>');
console.log('tu direccion es: ', direccion);

movil = prompt('Escribe tu movil: ')// pedir <brdatos al usurio.
document.writeln('tu movil es: ', movil, '<br>');
console.log("tu movil es: ", movil);

email = prompt('escribe su email: ')//pedir datos al usurio.
document.writeln('tu email es: ', email, '<br>');
console.log("tu email es: ", email);

dinero = prompt('Digita el dinero que tienes: ') // adicional 
document.writeln('tu dinero es: ', dinero, '<br>');
console.log("el dinero es: ", dinero);