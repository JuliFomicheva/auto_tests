let age = 38

function logUserName(surname, firstname) { 
    let userName = surname + firstname
    console.log(userName + " age is " + age); 
}

let anotherUser = "Ivan"
let userSurname = " Pavlov"
logUserName(anotherUser, userSurname);
logUserName("Julia", " Fomicheva")


function isLengthMoreThan6(text) {
    if (text > 6) {
        console.log(true)
    } else {
        console.log(false)
    }
}

isLengthMoreThan6("someWord")

function calculateLengthMoreThan6(text) {
    return text.length

}

let lengthofWord = calculateLengthMoreThan6("someWord")
console.log(lengthofWord)