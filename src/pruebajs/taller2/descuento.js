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
    const inputPrice= document.getElementById('InputPrice');
    const price= inputPrice.value;
    const inputDiscount= document.getElementById('InputDiscount');
    const discount= inputDiscount.value;
    
    const precioDescuento= calcularPrecioConDescuento(price,discount);

    const result= document.getElementById("resultPrice");

    result.innerText="El precio del producto con descuento es $" + precioDescuento;
 
}