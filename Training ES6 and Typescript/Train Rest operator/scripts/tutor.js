"use strict";
// let displayColors = function(){
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
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
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Colors";
displayColors(message, 'red'); // arguments.length show 2 because message and red
displayColors(message, 'red', 'blue'); // arguments.length show 3 because message and red and blue
displayColors(message, 'red', 'blue', 'green'); // arguments.length show 4 because message and red and blue and green
// message not double in console because not using argument but seperate with "message, ...colors"
console.log("\n");
console.log("ABOVE THERE USING REST");
console.log("BELOW HERE USING SPREAD");
console.log("\n");
// BELOW HERE SPREAD OPERATOR
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "List of Colors";
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors.apply(void 0, __spreadArrays([message], colorArray));
//# sourceMappingURL=tutor.js.map