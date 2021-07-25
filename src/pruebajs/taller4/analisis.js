const salariosCol = colombia.map(function (persona) {
    return persona.salary;
})

const salariosColSorted = salariosCol.sort(
    function (salarioA, salarioB) {
        return salarioA - salarioB;
    });

function esPar(numero) {
    return (numero % 2 === 0)
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

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

console.log(medianaSalariosCol(salariosColSorted));