//Define a Function That Uses a Parameter
function introduction(name) {
    return (`Hi, my name is ${name}.`);
}


//Define a Function That Uses Two Parameters
function introductionWithLanguage(name, language) {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}


//Define a Function That Uses an Optional Parameter
//By setting a default value for that parameter
// function sayHelloTo(firstName = "User") {
//     console.log(`Hello, ${firstName}!`);
//   }


// console.log(introduction("ziru"));
// console.log(introductionWithLanguage("Ziru", "JavaScript"));
// sayHelloTo("Ziru")
// sayHelloTo()

function introductionWithLanguageOptional(name, language="JavaScript") {
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`);
}


console.log(introductionWithLanguageOptional("Liz", language="Python"))