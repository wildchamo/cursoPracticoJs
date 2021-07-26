//utils

function esPar(numero) {
    return (numero % 2 === 0)
}

function  calcularMediaAritmetica  (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
}


const salariosCol = colombia.map(function (persona) {
    return persona.salary;
})

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    });



function medianaSalariosCol(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        let personaMitad = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return personaMitad;

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const medianaGeneralCol = medianaSalariosCol(salariosColSorted);


// mediana top10%
const spliceStart = (salariosColSorted.length * 90) / 100;
const spliceCount = salariosColSorted.length - spliceStart;



const salarioColTop10 = salariosColSorted.splice(spliceStart,spliceCount);


const medianaTop10Col=medianaSalariosCol(salarioColTop10);


console.log(medianaGeneralCol);
console.log(medianaTop10Col);