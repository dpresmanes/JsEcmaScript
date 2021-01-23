//es8

const data = {
    frontend:'oscar',
    backend:'isabel',
    design:'Ana'
}

const entries = Object.entries(data)
console.log(data)

//Saber cuantos elementos hay y hacer alguna validacion//
console.log(entries)
console.log(entries.length)

//de un objeto me devuelve un arreglo 


const data = {
    frontend:'oscar',
    backend:'isabel',
    design:'Ana'
}

const values = Object.values(data)
console.log(values)
console.log(values.length)

//padding

const string = 'hello'
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12,'-----'))
console.log('food'.padEnd(12,'  -----'))

//clase 8 
// Async Await

const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ?setTimeout(()=> resolve('hello world'), 3000)
        : reject (new Error('test Error'))
    })
}

const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync ()

const anotherFunction = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)   
    } catch (error) {
        console.log(error)
    }
}

anotherFunction ()