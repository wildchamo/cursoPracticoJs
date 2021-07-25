const salariosCol= colombia.map(function(persona){
    return persona.salary;
})

const salariosColSorted=salariosCol.sort(function(salarioA,salarioB){
    return salarioA-salarioB;
})