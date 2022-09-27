// Variables
let nombre = 'Sergio'
let edad = 100
let isUser = true // false
let noAsignada = undefined
let cualquierCosaQueSeMeOcurra = 'cualquier cosa'
let medida = 1.60

// Arrays // Arreglos // Vectores // esto es una lista
let nombres = ['Diego', 'Sara', 'Sergio']
// console.log(nombres)


// Funciones
// function saludar() {
//     decirHola()
// }

// function decirHola() {
//     let mensaje = 'hola'
//     console.log(mensaje)
// }

// saludar()

function irPorAgua(cantidad) {
    console.log('recogiendo', cantidad, 'mililitros')
}

function calentarAgua() {
    console.log('calentando el agua')
}
function irPorCafe() {
    console.log('llendo por cafe')
}

function cogerUnVasito() {
    console.log('cogiendo el vasito')
}

function hecharleAzucar(cantidad) {
    console.log('hechandole', cantidad, 'de azuquita pa mi gente!!')
}

function hecharleLeche(conLeche) {
    if (conLeche) {
        console.log('con leche')
    } else {
        console.log('sin leche')
    }
}

function hacerTinto(cuantasDeAzucar, cuantaAgua, conLeche) {
    irPorAgua(cuantaAgua)
    calentarAgua()
    irPorCafe()
    cogerUnVasito()
    hecharleAzucar(cuantasDeAzucar)
    hecharleLeche(conLeche)
    console.log('listo el pollo!!!')
    return 'cafecito'
}

let cafecito = hacerTinto(2, 300, false)
console.log(cafecito)

// function suma(n1, n2) {
//     return n1 + n2
// }

// function resta(primero, segundo){
//     return primero - segundo
// }

// function multiplica(x,y) {
//     return x * y
// }

// let regaloDeCumple = 100
// let loteria = 100
// let res = suma(regaloDeCumple, loteria)

// let grantTotal 
// grantTotal = multiplica(4500, res)
// console.log(grantTotal)




// nota, para ejecutar una funcion se escribe el nombre de la funcion y se le ponen los
// parentesis




