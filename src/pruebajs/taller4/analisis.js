const salariosCol= colombia.map(function(persona){
    return persona.salary;
})

const salariosColSorted=salariosCol.sort(function(salarioA,salarioB){
    return salarioA-salarioB;
});

function esPar(numero){
    if(numero%2 ===0){
        return true;
    }
}

