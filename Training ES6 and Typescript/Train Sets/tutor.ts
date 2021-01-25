let mySet = new Set();
let ob1 = {};
let ob2 = {};

mySet.add("Hello");
mySet.add(1);
mySet.add(1); // if duplicate mySet.add([here]) mySet.size remain same as before
mySet.add(ob1);
mySet.add(ob2); // mySet.size increase because object not converted to string
console.log(mySet.size);

let newSet = new Set([1,2,3,3,3,4,5,5,5,5]); // newSet.size 5 because there is duplicate
console.log(newSet.size);

let chainSet = new Set().add("Hello").add("World"); // chainSet.size 2 because added 2 array
console.log(chainSet.size);

console.log(`newSet.has(1): ${newSet.has(1)}
newSet.size: ${newSet.size}
newSet.delete(1): ${newSet.delete(1)}
newSet.has(1): ${newSet.has(1)}
newSet.size: ${newSet.size}`);

