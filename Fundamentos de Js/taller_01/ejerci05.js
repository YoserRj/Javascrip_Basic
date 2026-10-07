document.body.style.fontFamily = "Arial Rounded MT Bold"
//Operadores Matematicas

// definimos variable
let a, b;
let c, d;

// definemos variable de operacion
let suma, Resta, mult, div, residuo, potencia;

a = prompt('ingresa un número:');
b = prompt('ingresa un número:');

// operaciones de prueba
document.write("SUMA", '<br>');
'<br>';
suma = Number(a) + Number(b);
document.write("La suma es: ", suma, '<br>');
console.log("La suma es: ", suma);

Resta = a - b;
document.write("La resta es:  ", Resta, "<br>");
console.log("La resta es: ", Resta);

mult = a * b;
document.write("La multiplicacion es: ", mult, "<br>");
console.log("el multiplicacion", mult);


residuo = a % b;
document.write("El residuo es: ", residuo, "<br>");
console.log("El Residuo es: ", residuo)


potencia = a ** b;
document.write("La potencia es:", potencia, "<br>");
console.log("La potencia es: ", potencia);

// metodogia corta 
// Obtener los datos o traves del usuario
c = parseFloat(prompt('digita un Número'));
d = parseInt(prompt('Digita otro Número'));

suma = c + d;
Resta = c - d;
mult = c * d;
div = c / d;
residuo = c % d;
potencia = c ** d;

document.write("los Resultado de las operaciones son: ",
    "suma: ", suma, '<br>',
    "resta: ", Resta,
    "Multiplicacion", mult,
    "Division", div,
    "Residuo: ", residuo,
    "Potencia: ", potencia
);

console.log("Las operaciones resultas son: ",
    "suma: ", suma,
    "Resta: ", Resta,
    "Multiplicación: ", mult,
    "Division: ", div,
    "Residuo: ", residuo,
    "Potencia; ", potencia
);


