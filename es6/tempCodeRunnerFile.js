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