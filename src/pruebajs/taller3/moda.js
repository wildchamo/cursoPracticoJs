//calcular la moda con js

lista3 = [2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 4, 4, 5, 7, 4, 1, 2, 2, 4, 5, 4, 3, 1, 2]

const lista3Count = {};

lista3.map(
    function (elemento) {

        if (lista3Count[elemento]) {
            lista3Count[elemento] += 1;
        } else {
            lista3Count[elemento] = 1;
        }
    }
);

const lista3Array = Object.entries(lista3Count).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1]
    }
);


const moda= lista3Array[lista3Array.length - 1]