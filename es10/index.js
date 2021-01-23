let array = [1,2,3, [1,2,3,[1,2,3]]]
console.log(array.flat())

let array = [1,2,3,5]
console.log(array.flatMap(value => [value, value * 2]))

let hello = '      Hello World';
console.log(hello);

// trimStar elimina espacios adelante
console.log(hello.trimStart());

//timEnd elimina espacios atras
console.log(hello.trimEnd())

//no hace falta pasar valor ()

try {

}catch {
    error
}

let entries = [['name','oscar'], ['age',32]]
console.log(object.fromEntries(entries))

let mySymbol = `my symbol`
let symbol = Symbol(mySymbol)
console.log(symbol.description)
