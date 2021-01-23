function newFunction (name, age,country){
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name,age,country);
}

//es6

function newFunction2(name='oscar', age='32',country='MX'){
    console.log(name,age,country);
}

newFunction2()
newFunction2('ricar','32','co')

let hello = "hello"
let world = "world"
let epicPhrace = hello + '' + world
console.log(epicPhrace)
//es6
let epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2)

//Clase3//
let lorem = 'esto es una gran frase la concha de tu madre \n'
+' otra frase no tan epica que me chupa la pitija '

//es6
let lorem2 = `otra frase bien piola 
ahora es otra frase`

console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'oscar',
    'age': 32,
    'country':'mx'
}

//antes de es6
console.log(person.name, person.age)

//es6
let {name,age,country} = person 
console.log(name,age,country)

//arreglos

let team1 = ['oscar', 'julian','ricardo']
let team2 = ['valeria', 'jesi', 'camila']

let education = ['david', ...team1, ...team2]

console.log(education)

//asignacion variable 
{
    var globalVar = 'global var'
    
}

{
    let globalLet = 'global Let'
    console.log(globalLet)
}

console.log(globalLet)

const a = 'b'

//clase 4 

let name = 'oscar'
let age = 32
//es5
obj = {name: name, age: age}

//es6
obj2 = {name,age}
console.log(obj2);

//arrow function

const names = [
    {name: 'oscar', age: 32},
    {name: 'yesi', age: 27}
]

let listOfNames = names.map(function(item){
    console.log(item.name)
})

//es6

let listOfNames2 = names.map(item => console.log(item.name))

const listOfNames3 = (name,age, country) => {
    ...
}

const listOfNames4 = name => {
    ...
}

const square = num => num * num

//promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true){
            resolve('hey!')
        }else {
            reject('ups!!')
        }
    })
}

hellowPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));

    //clase 5 
    //clases

    class calculator {
        constructor() {
            this.valueA = 0
            this.valueB = 0
        }
        sum(valueA, valueB) {
            this.valueA = valueA;
            this.valueB = valueB;
            return this.valueA + this.valueB;
        }
    }

    const calc = new calculator()
    console.log(calc.num(2+2))

    //modulo

    import {hello} from './module'
    hello();

    //Generadores

    function* helloWorld(){
        if(true){
            yield 'hello, ';
        }
        if (true){
            yield 'world';
        }
    }

    const generatorHello = helloWorld()
    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)
    console.log(generatorHello.next().value)



