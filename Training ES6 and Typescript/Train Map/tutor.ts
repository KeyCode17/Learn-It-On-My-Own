
let myMap = new Map();

myMap.set("fname", "Daffa");
myMap.set("age", 19);

console.log(`myMap.get("fname"): ${myMap.get("fname")}`);

let ob1 = {};
let ob2 = {};

myMap.set(ob1, 10)
myMap.set(ob2, 20)

console.log(`myMap.get(ob1): ${myMap.get(ob1)}`);
console.log(`myMap.get(ob2): ${myMap.get(ob2)}`);
console.log(`myMap.size: ${myMap.size}`);
console.log(`myMap.has("fname"): ${myMap.has("fname")}`);
console.log(`myMap.delete("fname"): ${myMap.delete("fname")}`);
console.log(`myMap.has("fname"): ${myMap.has("fname")}`);
console.log(`myMap.size: ${myMap.size}`);
myMap.clear()
console.log(`myMap.clear(): true`);
console.log(`myMap.size: ${myMap.size}`);





