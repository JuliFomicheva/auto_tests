let testUser = new Object();
testUser.name = "Julia";
testUser.age = 38;
testUser.city = "Dresden"

console.log(testUser)

let testUserLiteral = {
    name: "Julia",
    age: 38,
    city: "Dresden"
}

console.log(testUserLiteral)

let testUserArray = new Array("Julia", 38, "Dresden")
console.log(testUserArray)

let testUserFunction = new Function(
    "userName",
    "age",
    "city",
    "return userName + age + city"
)

console.log(testUserFunction("Julia", 38, "Dresden"))

let testUserSimple = {
    name: "Julia",
    age: 38,
    city: "Dresden"
}

console.log(testUserSimple)

testUserSimple.beruf = "QA"

console.log(testUserSimple)

//если свойство задается через переменную, нужно использовать квадратные скобки для присвоения ему значения

let newProperty = "car"
let value = "Mazda"
testUserSimple[newProperty] = value

//либо testUserSimple[newProperty] = "Mazda", если нет необходимости задавать значение через переменную

console.log(testUserSimple)

if(testUserSimple.age > 30 && testUserSimple.car == "Ford") {
    console.log("Get a credit")
} else {
    console.log("U R 2 young")
}

//если нужно использовать два условия, добавляем через &&

let anotherTestUser = testUserSimple;
console.log(anotherTestUser);
anotherTestUser.name = "Helena";
console.log(anotherTestUser)

let calculation = {
    march: 4100,
    april: 5000,
    may: 4000,
    calculateAverage: function() {
        let average = (calculation.april + calculation.may + calculation.march)/3
        console.log(average)
    }
}

calculation.calculateAverage();