const precioOriginal= 100;
const descuento=15;


const porcentajeConDescuento= 100- descuento;

const precioConDescuento= (precioOriginal*porcentajeConDescuento)/100;

console.log({
    precioOriginal,
    descuento,
    porcentajeConDescuento,
    precioConDescuento
});