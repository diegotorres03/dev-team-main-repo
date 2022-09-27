## Funciones
Las funciones nos permiten agrupar comportamientos y acciones.
Estas pueden tomar valores de entrada, tambien llamados parametros, en este caso `numero1` y `numero2`.
Los valores de salida, se les conoce como retorno y es cualquier valor o expresion que se encuentre despues de la palabra `return`.
```js
function suma(numero1, numero2) {
    // logica aca
    return numero1 + numero2
}
    
let resultado = suma(1,2) // esto retorna 3 y lo guarda en la variable resultado

```

### Ejemplo cafecito
```js

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

```

---

## Variables
Las variables nos permite almacenar valores temporalmente.
**tipos de valores:**
- undefined
- null
- number
- string
- boolean
- array
- object
- function
```js
let name = 'diego'
let age = 100
let isAwesome = true
let empty = undefined
let nothing = null
let suma = function (num1, num2) {
    return num1 + num2
}
```
---

## Arrays
Un array nos permite almacenar multiples valores en una sola variable.
Tambien se les conoce como listas o vectores.
```js
let miArray = [name, age, isAwesome, empty, nothing, 'otra cosa', 1, {},  []]
```

---

## Objetos
Nos permiten agregar variables y funciones en una misma variable
```js
let cafetera = {
    prendida: true,
    tieneCafe: true,
    tieneAgua: true,
    hacerCafe: function (azucar, agua, conLeche){},
    apagar: function() {},
}
```
