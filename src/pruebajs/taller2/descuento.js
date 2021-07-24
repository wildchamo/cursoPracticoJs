const precioOriginal= 120;
const descuento=18;



console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioConDescuento
});


function calcularPrecioConDescuento(precio,descuento){

    const porcentajeConDescuento= 100- descuento;

    const precioConDescuento= (precio*porcentajeConDescuento)/100;

    return precioConDescuento;
}