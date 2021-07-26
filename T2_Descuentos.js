// Importe




function calcularDescuento(subTotal, porcentaje)
{
    const totalPagar = subTotal - subTotal*porcentaje/100; 
    return totalPagar;
}



function calcular()
{
    const subtotal = Number(document.getElementById("InputSubTotal").value);
    const descuento = Number(document.getElementById("InputDescuento").value)
    
    if (descuento<=0)
    {
        alert("No se puede tener un descuento " + descuento);
        return;
    }

    const total = calcularDescuento(subtotal, descuento);
    //alert(total)
    const resultTotal = document.getElementById("resultTotal");
    resultTotal.innerText = "S/. " + total;
}