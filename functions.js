// let age = 38

// function logUserName(surname, firstname) { 
//     let userName = surname + firstname
//     console.log(userName + " age is " + age); 
// }

// let anotherUser = "Ivan"
// let userSurname = " Pavlov"
// logUserName(anotherUser, userSurname);
// logUserName("Julia", " Fomicheva")


// function isLengthMoreThan6(text) {
//     if (text > 6) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// isLengthMoreThan6("someWord")

// function calculateLengthMoreThan6(text) {
//     return text.length;
// }
// console.log(calculateLengthMoreThan6("thatIsMyText"))

// let result = calculateLengthMoreThan6("sohatIsMyText")

// function logTextParameter(textData) {
//     let textInfo = result;
//     return textInfo
// }

// console.log(logTextParameter(result))

let respPositive200 = {
    code: 200,
    body: {
        text: "Some Positive message"
    }
}

let respRedirect300 = {
    code: 300,
    body: {
        text: "Some Redirect message"
    }
}

let isResponse200 = function(code, expectedCode) {
    if (code === expectedCode) {
        return true
    } else {
        return false
    }
}

let someArrowFunction = () => {return 55}
console.log(someArrowFunction())

let IsValid = (code) => code === 200
console.log(IsValid(400))

function getTextMessage(response, codeValidation, expectedCode) {
    let text = response.body.text;
    if (!codeValidation(response.code, expectedCode)) {
        console.log(`Not a ${expectedCode}`)
    }
    let info = {};
    info.text = text;
    info.code = response.code
    return info;   
}

console.log(getTextMessage(respRedirect300, isResponse200, 200))