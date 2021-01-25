let num1;
//const num2; not allowed
const num2 = 10; //allowed

const obj1 = {
    name:"Joatmon"
};
console.log(obj1.name)

//obj1.(object) = "(what you want to change)" // allowed
//obj1 = "(what you want to change)" // not allowed
obj1.name = "chandler";

console.log(obj1.name);