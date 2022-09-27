

// defining the function
function print(value) {
    console.log('(> *.*)> ' + value )
}

function sadPrint(value) {
    console.log('=( ', value)
}

function printer(value, printFunction) {
    printFunction(value)// console.log('string')
}


// using the function
// print(2)
// print('string')
// print(true)
// print('print')
// print(string)

// printer('string', console.log)
// printer('string', print)
// printer('string', sadPrint)
// NOTE, we can use functions as values and pass it inside other functions





// take 2 numbers and return the sum of them
function add(num1, num2) {
    return num1 + num2
}

function substract(num1, num2) {
    return num1 - num2
}


var res = substract(1, 2)
// print(res)




function multiples(num1) {
    return function (num2) {
        return num1 * num2
    }
}

// var x = multiples(2)

function makeCoffe(amountOfSugar) {
    console.log('making coffe with ' + amountOfSugar + ' tablespoons of sugar')
}

makeCoffe(1)
makeCoffe(2)
makeCoffe(3)
makeCoffe(4)
makeCoffe(5)

