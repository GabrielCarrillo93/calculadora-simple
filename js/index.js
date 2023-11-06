/*
    Ejercicio 1
    Tengo desarrollada la siguiente función en javascript
    function suma (a,b,callback){
    let c = a +b;
    callback();
    }
    ¿Que es el tercer parámetro recibido?

    El tercer parámetro recibido es una función

    ¿En que casos es obligatorio desarrollar este tipo de funciones?

    Es obligatorio en los casos que se necesite llamar una función extra para realizar un procedimiento
    y en los métodos nativos que requieran una callback

    Realizar un llamado a la función de ejemplo

     suma(1, 2, callback);
*/

/*
    Ejercicio 2
    
    Desarrollador una calculadora que tenga:
    ● 2 campos inputs para los operadnos
    ● 4 botones de operadores básicos (suma, resta, multiplicación, división)
    Al realizar la cuenta se deberá actualizar el campo resultado
*/

//constantes y variables
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const suma = document.getElementById("suma");
const resta = document.getElementById("resta");
const multiplicacion = document.getElementById("multiplicacion");
const division = document.getElementById("division");
const resultado = document.getElementById("resultado")
let primerNum;
let segundoNum;

//funciones
const sumar = (n1, n2) =>{
    let total = Number(n1) + Number(n2)
    resultado.textContent = total
}

const restar = (n1, n2) =>{
    let total = Number(n1) - Number(n2)
    resultado.textContent = total
}

const multiplicar = (n1, n2) =>{
    let total = Number(n1) * Number(n2)
    resultado.textContent = total
}

const dividir = (n1, n2) =>{
    let total = Number(n1) / Number(n2)
    resultado.textContent = total.toFixed(2)
}

//captura de los valores numéricos
num1.addEventListener("input", () => {
    primerNum = num1.value;
})

num2.addEventListener("input", () => {
    segundoNum = num2.value;
})

//eventos
resta.addEventListener("click", () => {
    restar(primerNum, segundoNum)
})

suma.addEventListener("click", () => {
    sumar(primerNum, segundoNum)
})

multiplicacion.addEventListener("click", () => {
    multiplicar(primerNum, segundoNum)
})

division.addEventListener("click", () => {
    dividir(primerNum, segundoNum)
})

