
function funcalcularPromedio(valores)
{
    let sumaValores = 0;
    valores.forEach(element => {
        sumaValores += element;
    });

    return sumaValores/valores.length;
}

function funcalcularMediana(valores)
{

    valores.sort(function(a,b){return a-b});

    var totalElemento = valores.length; 
    let mediana = 0;
    if ( totalElemento%2 == 0) {
        var indexMedio = totalElemento/2;
        mediana = funcalcularPromedio([valores[indexMedio] , valores[indexMedio - 1]]);   
    } else{
        var indexMedio = (totalElemento+1)/2;
        mediana = valores[indexMedio-1];
    }
    return mediana;
}


function funcalcularModa(valores)
{
    const val = {};
    valores.map(function(elemento){
        if (val[elemento]) {
            val[elemento] +=1; 
        }else{
            val[elemento] = 1;
        }
    });

    let  mayor = 0;

    for (const key in val) {
        mayor =val[key]>mayor ? val[key] : mayor;
    }   

    const moda = [];

    for (const key in val) {
        if (mayor == val[key]) 
        {
            moda.push(key);
        }
    }   

    return moda; 

}


function convertir_a_Cadena(cadena)
{
    return cadena.split(",").map(function(elemento){return parseInt(elemento)});
}

function calcularPromedio(){
    const cajaRespuesta = document.getElementById("cajaRespuesta");
    const cadena = document.getElementById("InputCadena").value;
    
    if ( cadena == "") {
        alert("Debe ingresar una cadena");
        return;
    }
    
    var array = convertir_a_Cadena(cadena);
    const promedio = funcalcularPromedio(array);

    cajaRespuesta.innerText ="El promedio es " + promedio.toString();

}

function calcularMediana()
{
  const cajaRespuesta = document.getElementById("cajaRespuesta");
  console.log(cajaRespuesta);
  const cadena = document.getElementById("InputCadena").value;
    
    if ( cadena == "") {
        alert("Debe ingresar una cadena");
        return;
    }
    
    var array = convertir_a_Cadena(cadena);
    var mediana = funcalcularMediana(array);

    console.log(mediana);
    cajaRespuesta.innerText = "La mediana es " + mediana;

}

function calcularModa()
{
    const cajaRespuesta = document.getElementById("cajaRespuesta");
    const cadena = document.getElementById("InputCadena").value;
    
    if ( cadena == "") {
        alert("Debe ingresar una cadena");
        return;
    }
    
    var array = convertir_a_Cadena(cadena);
    var moda = funcalcularModa(array);
    cajaRespuesta.innerText = "La moda(s) es: " + moda;

}

