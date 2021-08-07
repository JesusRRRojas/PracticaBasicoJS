//Helpers


function esPar(numero)
{
    return numero % 2 === 0;
}

function calcularPromedio(valores)
{
    let sumaValores = 0;
    valores.forEach(element => {
        sumaValores += element;
    });

    return sumaValores/valores.length;
}

//Calculadora de mediana (array)
function CalcularMedianaSalarios(salaries)
{
    var totalElemento = salaries.length; 
    let mediana = 0;
    if ( esPar(salaries.length)) {
        var indexMedio = totalElemento/2;
        mediana = calcularPromedio([salaries[indexMedio] , salaries[indexMedio - 1]]);   
    } else{
        var indexMedio = (totalElemento+1)/2;
        mediana = salaries[indexMedio-1];
    }
    return mediana;
}


//

const salarios_personas = colombia.map(function (persona){
    return persona.salary;
} );


const salarios_colombia_ordenado = salarios_personas.sort(function (salaryA, salaryB){
    return salaryA - salaryB;
} );

const cantidad_10_porciento = parseInt(salarios_personas.length * 0.1);
const salarios_colombia_ordenado_top10 = salarios_colombia_ordenado.slice(salarios_colombia_ordenado.length - cantidad_10_porciento, salarios_colombia_ordenado.length );
//const salarios_colombia_ordenado_top10 = salarios_colombia_ordenado.splice(salarios_colombia_ordenado.length - cantidad_10_porciento, cantidad_10_porciento);

//Mediana General
const mediana_general = CalcularMedianaSalarios(salarios_colombia_ordenado)

//Mediana Top 10 %
const mediana_top10 =  CalcularMedianaSalarios(salarios_colombia_ordenado_top10)


console.log({
    salarios_personas:salarios_personas,
    salarios_colombia_ordenado:salarios_colombia_ordenado,
    salarios_colombia_ordenado_top10:salarios_colombia_ordenado_top10,
    mediana_general: mediana_general,
    mediana_top10: mediana_top10
});