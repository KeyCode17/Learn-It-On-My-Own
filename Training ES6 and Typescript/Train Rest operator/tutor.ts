
// let displayColors = function(){

//         console.log(message);

//     for(let i in arguments){
//         console.log(arguments[i])
//     }
// }

// let message = "List of Colors"

// displayColors(message, 'red'); // console output: message + message + red
// displayColors(message, 'red', 'blue'); // console output: message + message + red + green
// displayColors(message, 'red', 'blue', 'green'); // console output: message + message + red + green + blue
// double message because in for loop use arguments

let displayColors = (message, ...colors) => {

    console.log(message);
    console.log(colors);
    console.log(arguments.length);

    for(let i in colors){
        console.log(colors[i])
    }
}

let message = "List of Colors"

displayColors(message, 'red'); // arguments.length show 2 because message and red
displayColors(message, 'red', 'blue'); // arguments.length show 3 because message and red and blue
displayColors(message, 'red', 'blue', 'green'); // arguments.length show 4 because message and red and blue and green
// message not double in console because not using argument but seperate with "message, ...colors"
console.log("\n")
console.log("ABOVE THERE USING REST")
console.log("BELOW HERE USING SPREAD")
console.log("\n")
// BELOW HERE SPREAD OPERATOR
let displayColors = (message, ...colors) => {

    console.log(message);
    console.log(colors);

    for(let i in colors){
        console.log(colors[i])
    }
}

let message = "List of Colors"

let colorArray = ['Orange', 'Yellow', 'Indigo']
displayColors(message, ...colorArray)