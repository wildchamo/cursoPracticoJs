//Código del cuadrado
console.group("Cuadrado")

// const ladoCuadrado= 5
// console.log("los lados del cuadrado mide: " +ladoCuadrado);
// const perimetroCuadrado= ladoCuadrado*4;

//const ladoCuadrado= prompt("cual es el lado del cuadrado?")

//parametro es en la declaraciòn de la función. Argumento es lo que le pasas a la función para que haga lo suyo
function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("el perimetro del cuadrado es: " +perimetroCuadrado(ladoCuadrado));

// const areaCuadrado= ladoCuadrado* ladoCuadrado;

function areaCuadrado(lado){
    return lado*lado;
}
//console.log("el área del cuadrado es: "+areaCuadrado(ladoCuadrado) +" centimetros cuadrados");

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
    

//console.log("el perimetro del triangulo es: "+ perimetroTriangulo);

function areaTriangulo(base,altura){
 return  ( base*altura)/2;
}

//console.log("el area del triangulo es: " +areaTriangulo);

console.groupEnd();


console.group("Circulos")

//radio

const radioCirculo= 4;
console.log("el radio del circulo es :" + radioCirculo)

//diametro


function diametroCirculo(radio){
    return radio*2;
}
//const diametroCirculo= radioCirculo*2;
//console.log("el diametro del circulo es "+ diametroCirculo)

//pi

const pi= Math.PI;

//circunferencia

function perimetroCirculo(radio){
    const diametro= diametroCirculo(radio);
    return diametro*pi;

}

//const perimetroCirculo= diametroCirculo*pi;
//console.log(" el perimetro del circulo es:" +perimetroCirculo)


//area

function areaCirculo(radio){
    return (radio*radio)*pi;
}

//const areaCirculo= (radioCirculo*radioCirculo)*pi;
//console.log("el area del circulo es:" + areaCirculo)

console.groupEnd();

function calcularPerimetroCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value=input.value;

    const perimetro= perimetroCuadrado(value);

    alert ("el perimetro del cuadrado es:" +perimetro);
}

function calcularAreaCuadrado(){
    const input= document.getElementById("InputCuadrado");
    const value=input.value;

    const area= areaCuadrado(value);

}


//triangulo isoceles

function areaTrianguloI(lado1,lado2,base){
    return Math.sqrt ((lado1*lado1)-((base*base)/4));
}
function perimetroTriangulo(lado1,lado2,base){
    return (lado1+lado2)+base;
}




//area
function calcularAreaTriangulo(){
    const input1= document.getElementById("InputTrianguloI");
    const input2= document.getElementById("InputTrianguloI2");
    const input3= document.getElementById("BaseTrianguloI");

    lado1= input1.value;
    lado2= input2.value;
    base= input3.value;

    var area=null;

    if(lado1===lado2){
    area= areaTrianguloI(lado1,lado2,base);
    alert(area) ;
    } else{
        alert( "no se puede calcular el area del triangulo, sus lados no son iguales");
    }

}

//perimetro

function calcularPerimetroTriangulo(){
    const input1= document.getElementById("InputTrianguloI");
    const input2= document.getElementById("InputTrianguloI2");
    const input3= document.getElementById("BaseTrianguloI");

    lado1= input1.value;
    lado2= input2.value;
    base= input3.value;

    var perimetro=null;

    if(lado1===lado2){
        perimetro= perimetroTriangulo(lado1,lado2,base);
        alert(perimetro);
        } else{
            alert( "no se puede calcular el perimentro del triangulo, sus lados no son iguales");
        }
    


}