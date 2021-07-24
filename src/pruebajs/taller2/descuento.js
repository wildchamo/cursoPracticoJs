const precioOriginal= 120;
const descuento=18;



// console.log({
//     precioOriginal,
//     descuento,
//     porcentajeConDescuento,
//     precioConDescuento
// });


function calcularPrecioConDescuento(precio,descuento){

    const porcentajeConDescuento= 100- descuento;

    const precioConDescuento= (precio*porcentajeConDescuento)/100;

    return precioConDescuento;
}

function OnclickCalcularPrecioConDescuento(){
    const inputPrice= document.getElementById('inputPrice');
    const price= inputPrice.value;
    const inputDiscount= document.getElementById('inputDiscount');
    const discount= inputDiscount.value;

    
}