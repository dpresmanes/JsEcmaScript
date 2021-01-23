//clase 9

const obj = {
    name: 'dami',
    age: '32',
    country: 'MX',
}

let {name, ...all } = obj;
console.log(name, all);

const obj = {
    name: 'oscar',
    age: 32,
}

const obj1 = {
...obj,
country: 'MX'
}

console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve,reject) => {
        (true)
        //? resolve ('Hello World')
        ?setTimeout(()=> resolve('Hello world'), 3000)
        : reject(new Error('Test Error'))
    })
}

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(()=> console.log('finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexDAta.exec('2018-04-20')
const year = match[1]
const mes = match [2]
const day = match[3]

console.log(year, mes, day)