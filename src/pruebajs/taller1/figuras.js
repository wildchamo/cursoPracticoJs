//Código del cuadrado
console.group("Cuadrado")

// const ladoCuadrado= 5
// console.log("los lados del cuadrado mide: " +ladoCuadrado);
// const perimetroCuadrado= ladoCuadrado*4;

const ladoCuadrado= prompt("cual es el lado del cuadrado?")

function perimetroCuadrado(lado){
    return lado*4;
}
console.log("el perimetro del cuadrado es: " +perimetroCuadrado(ladoCuadrado));

// const areaCuadrado= ladoCuadrado* ladoCuadrado;

function areaCuadrado(lado){
    return lado*lado;
}
console.log("el área del cuadrado es: "+areaCuadrado(ladoCuadrado) +" centimetros cuadrados");

console.groupEnd();
//Código del triangulo
console.group("Triangulo")
const ladoTriangulo1=6;
const ladoTriangulo2=6;
const baseTriangulo=4;
const alturaTriangulo= 5.5;

console.log(
    "los lados del triagulo miden: "
    +ladoTriangulo1+ " cm,"+
    ladoTriangulo2+ " cm,"+ 
    ", su base es: "+baseTriangulo +" cm"
    + " y su altura es:"+alturaTriangulo)
    

const perimetroTriangulo= ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("el perimetro del triangulo es: "+ perimetroTriangulo);

const areaTriangulo = ( baseTriangulo*alturaTriangulo)/2;
console.log("el area del triangulo es: " +areaTriangulo);

console.groupEnd();


console.group("Circulos")

//radio

const radioCirculo= 4;
console.log("el radio del circulo es :" + radioCirculo)

//diametro

const diametroCirculo= radioCirculo*2;
console.log("el diametro del circulo es "+ diametroCirculo)

//pi

const pi= Math.PI;

//circunferencia

const perimetroCirculo= diametroCirculo*pi;

console.log(" el perimetro del circulo es:" +perimetroCirculo)


//area

const areaCirculo= (radioCirculo*radioCirculo)*pi;

console.log("el area del circulo es:" + areaCirculo)

console.groupEnd();