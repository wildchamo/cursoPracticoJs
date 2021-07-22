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


//FUNCIONES

//¿Qué es una función?

//es una declaración que te permite reutilizar codigo 

//¿Para que sirve usar una función en tu codigo?

//sirve para no repetir codigo, las funciones hacen la vida mas facil a la hora de programar

//parametros y argumentos de una función 

//


const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");


function nombreNickname(name,lastname,nickname){
    const completeName= name+lastname;
    console.log("Mi nombre es " +completeName+ ",pero prefiero que me digas " + nickname+ ".");
}

nombreNickname( "Jose", "Luis", "wildChamo");

//condicionales

//que es un condicional == operador logico que te permite bifurcar una decisión

// tipos de condicionales == if else switch ternario

//¿Puedo combinar funciones y condicionales? == si puedes


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion= "ExpertPlus";

if(tipoDeSuscripcion=="Free"){
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion=="Basic"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion=="Expert"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if(tipoDeSuscripcion=="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} 


//que es un ciclo== es un metodo que se realiza hasta que algo pasa o deja de pasar

//que ciclos existen en js== for y while 

//Qué es un ciclo infinito y pq es un problema== es un ciclo que nunca cumple al condición para que se termine
//es un problema porque agota la memoria del navegador, no tiene sentido tener un ciclo infinito  

//puedes mezclar ciclos y condicionales??== si puedes mezclarlos!


for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

let i=0;
while (i <5) {
    console.log("El valor de i es: " + i);
    i++;
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


let i=10;
while(i>=2){
    console.log("El valor de i es: " + i);
    i--;
}

var pregunta= prompt("cuanto es 2+2?");

if(pregunta== 4){
    alert("muy bien!")
}else{
    alert("vuelve a internarlo")
}


//arreglos

//que es un arreglo= es una colección de elementos

//un objeto es una variable que tiene mas de una propiedad

//un arreglo cuando tienes muchos elementos con algo en común y un objeto cuando quieres guardar datos de un objeto

//si se pueden mezclar objetos con arreglos 

const array= ["hola","soy","Jose"];

const primerObjeto=function(array){
    console.log(array[0]);
}

primerObjeto(array);


const todosLosElementos= function(array){
    for(i=0;i<array.length;i++){
        console.log(array[i]);
    }
}

todosLosElementos(array);


const JoseLuis={
    nombre:"JoseLuis",
    apellido:"Bedoya",
    edad:"19",
    detalleDelUsuario: function(){
        console.log("usuario"+ this.nombre, this.apellido,this.edad )
    } 
}
JoseLuis.detalleDelUsuario();