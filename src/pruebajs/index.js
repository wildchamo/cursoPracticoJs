//¿Qué es una variable y para qué sirve?

//una variable sirve para guardar datos que sean relevantes para la aplicación 

//¿Cuál es la diferencia entre declarar e inicializar una variable?

/*La diferencia entre declarar e inicializar una variable es que cuando la declaras solamente decis que existe,por ejemplo:
var a; 
Cuando inicializas una variable le declaras y le asignas un valor, así: 
var a =1; */

//¿diferencia entre sumar numeros y concatenar strings?

/*la diferencia es que cuando se suman numeros se realiza una suma entre ellos, en cambio cuando se concatenan strings se usa una variable
diferente, en este caso strings, lo que hace el operador de suma los pega y convierte en un solo string */


//¿operador que permite concatenar y sumar?

// el operador que te permite concatenar y sumar es este= + .


var nombre= "Jose Luis";
var apellido= " Bedoya";
var nombreUserPlatzi= "wildChamo";
var edad= 19;
var correoElectronico= "wildchamo@gmail.com";
var mayorEdad= true;
var dineroAhorrado= 5000;
var deudas=1000;

var nombreCompleto= nombre+apellido;
var dineroReal= dineroAhorrado-deudas;

console.log(nombreCompleto,dineroReal);
