//CUADRADO  -------------------------------------------------
console.group("Cuadrados")
console.log("Bienvenido al curso")

// Calculando el perimetro del cuadrado
const ladoCuadrado = 5;

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El permitro del cuadrado es: " + perimetroCuadrado + "cm");

function perimetroCuadrado(lado)
{
    return lado*4;
}

// Calculando el área  del cuadrado
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado es: " + areaCuadrado + "cm2");

function areaCuadrado(lado)
{
    return lado*lado;
}

console.groupEnd();

//TRIANGULO -------------------------------------------------
console.group("Triangulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const ladoTriangulo3 = 10;

// Calculando el perimetro del triangulo

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + ladoTriangulo3;
//console.log("El perímetro del triangulo es: " + perimetroTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}

// Calculando el área  del Triangulo
//const areaTriangulo = (ladoTriangulo1 * ladoTriangulo2 + (ladoTriangulo3/2)^2 )*  1/2;
//console.log("El area del triangulo es: " + areaTriangulo + "cm2");


function areaTriangulo(base, altura)
{
    return (base * altura)/2;
}

console.groupEnd();


//TRIANGULO -------------------------------------------------
console.group("Circulos")

const radio = 4;
const PI = Math.PI; //3.1416;

// Calculando el perimetro del circulo

//const perimetroCirculo = PI*radio*2; 
//console.log("El perímetro del circulo es: " + perimetroCirculo + "cm");

function perimetroCirculo(radio)
{
    return PI*radio*2;
}

// Calculando el área  del circulo
//const areaCirculo = PI*radio^2;
//console.log("El area del circulo es: " + areaCirculo + "cm2");

function areaCirculo(radio)
{
    return PI*radio*radio;
}

console.groupEnd();