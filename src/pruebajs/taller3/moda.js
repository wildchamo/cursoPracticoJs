//calcular la moda con js

lista3= [2,2,2,2,2,2,21,1,1,1,1,4,4,5,7,4,1,2,12,4,5,4,3,1,2]

const lista3Count={};

lista3.map(
    function(elemento){

        if(lista3Count[elemento]){
            lista3Count[elemento] += 1;
        }else{
            lista3Count[elemento]=1;
        }
    }
);