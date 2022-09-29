
let transacction = {
    amount: 123, // cantidad
    code: 2234, // [ ]  consecutivo Sancar llene mas aca
    taxes: 123123,
    total: 12123,
    id: 'uuid',
}


// let debitos = [transacction, transacction]
let creditos = [
    {amount: 10},
    {amount: 11},
    {amount: 11.1},
    {amount: 10.2},
]

let totalCreditos = 0

creditos.forEach(function (item) {
    totalCreditos = totalCreditos + item.amount
})


console.log(totalCreditos)