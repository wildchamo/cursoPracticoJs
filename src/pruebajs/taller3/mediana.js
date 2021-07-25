const lista2 = [
    100, 200, 300, 4000000
]



function calcularMediana(lista) {
    const mitadLista1 = parseInt(lista.length / 2);
    let mediana;
    if (esPar(lista.length)) {
        const elemento1 = lista[mitadLista1];
        const elemento2 = lista[mitadLista1 - 1];

        mediana = calcularMediaAritmetica([elemento1, elemento2]);

    } else {
        mediana = lista[mitadLista1];
    }
    return mediana;
}


function esPar(numero) {

    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }

}
