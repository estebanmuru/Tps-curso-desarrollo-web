//alert("Hola js externo");

function calcularPrecioTotal()
{
    let cantEnt=document.getElementById("cantidad").value;
    console.log("Ingreso a función calcularPrecioTotal()");//para control en consola del navegador
    console.log("valor ingresado en cantEnt: "+ cantEnt); // controla que funcione cantidad en consola nav

    let porcEnt= document.getElementById("porcDescuento").value;
    console.log("valor ingresado en porcEnt:  "+ porcEnt); // control funcionamiento porcentaje en consola nav

    let descuento= (cantEnt*1000)*porcEnt/100;
    console.log("valor de variable descuento: " + descuento);// control en consola
    
    let precioFin=(cantEnt*1000)-descuento;
    console.log("valor de variable precioFin: "+ precioFin)// control en consola

    document.getElementById("precioFinal").value=precioFin;
    document.getElementById("precioFinal2").innerHTML=precioFin; //modifico el valor del div con id=precioFinal2
}