let myMap = new WeakMap();
let ob1 = {};
myMap.set(ob1, "Hello World")
console.log(`myMap.get(ob1): ${myMap.get(ob1)}`);
console.log(`ob1 = ${ob1 = null}`);
console.log(`myMap.has(ob1): ${myMap.has(ob1)}`);
console.log(`myMap.get(ob1): ${myMap.get(ob1)}`);