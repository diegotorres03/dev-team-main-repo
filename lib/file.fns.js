const fs = require('fs')

function saveonFile(path, json) {
    fs.writeFileSync(path, JSON.stringify(json))
}



function readFile(path) {
    const text = fs.readFileSync(path).toString('utf8')
    return JSON.parse(text)
}


module.exports = { readFile, saveonFile }


// let testPath = './test.json'
// saveonFile(testPath, { oe: 'asdasdsads' })
// const res = readFile(testPath)
// console.table(res)
