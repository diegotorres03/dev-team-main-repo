// variables
let name = 'Carlos'

// array
let array = ['adasd', name, function () { }, [], {}]

// objetos
// funcion constructora
function crearUsario(name, age, address) {
    let user = {
        name: name,
        age: age,
        address: {
            street: address.street,
            apt: address.apt,
        },
        sayHi: function () {
            console.log('hi', this.name)
        },
        sendEmail(message){

        }
    }
    return user
}

let address = {
    street: 'adsasdasd',
    apt: 12132123,
}

let diego = crearUsario('Diego', 200, address)

let sergio = crearUsario('Sergio', 100, {
    street: 'adsasdasd',
    apt: 12132123,
})
