"use strict";
function greetPerson(name) {
    var greet;
    if (name === "KeyCode") {
        var greet_1 = "Hello KeyCode";
    }
    else {
        var greet_2 = "Hi there";
    }
    console.log(greet);
}
greetPerson("KeyCode");
// function greetPerson(name: string){
//     |||var greet;||| // you can place here
//     if (name === "KeyCode") {
//         greet = "Hello KeyCode"
//     }else{
//         greet = "Hi there"
//     }
//     console.log(greet) // Terminal output : Hello KeyCode/Hi There 
//     |||var greet;||| // or you can place here
// }
// greetPerson("KeyCode"/"(random name)") // Terminal output : Hello KeyCode/Hi There
// function greetPerson(name: string){
//     |||let greet;||| // Only can placed here (first bracked)
//     if (name === "KeyCode") {
//         greet = "Hello KeyCode"
//     }else{
//         greet = "Hi there"
//     }
//     console.log(greet)
// }
// greetPerson("KeyCode"/"(random name)") // Terminal output : Hello KeyCode/Hi There
// function greetPerson(name: string){
//     let greet;
//     if (name === "KeyCode") {
//         let greet = "Hello KeyCode"
//     }else{
//         let greet = "Hi there"
//     }
//     console.log(greet)
// }
// greetPerson("KeyCode") // Terminal output : undefined
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
//var can same
// var c=1;
// var c=2;
// let can't same bracked
// let d=1;
// let d=2;
// mix/combine can't in the same bracked too
// var e=1;
// let e=2;
//# sourceMappingURL=demo.js.map