// variables
let fruta = 'manzana'

/// -------------



// funciones

/// -------------

// let frutaPicada = picar(fruta)

// console.log(frutaPicada)

// array / listas

// objetos
let monoDeLasFrutas = {
    nombre: 'Sancar',
    precio: 10000,
    prepararSalpicon: function () {
        // [x] tener frutas
        let frutas = ['manzana', 'pera', 'auyama']
        
        // [x] lavarlas
        function picar(fruta) {
            return fruta + ' picada'// manzana picada
        }

        let frutasPicadas = frutas.map(picar)
        console.log(frutasPicadas)

        // [ ] lavarlas
        // [ ] jugo de naranja
        // [ ] servirlo
    }
}

// console.log(monoDeLasFrutas.prepararSalpicon())
