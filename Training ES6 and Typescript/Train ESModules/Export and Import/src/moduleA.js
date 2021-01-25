// console.log(`Module A log 1`); // console output after Module B Loaded

// import { fname, lname} from "./moduleB.js"; // import variable from moduleB.js
import { fname as f, lname as l, obj} from "./moduleB.js"; //  using alias // import method hosted(always in top)

// console.log(`Module A log 2`); // console output after Module log 1

// f = `Ross` // you can't change it in here
obj.name = `Ross`; // but you can change object

console.log(obj.name);
console.log(`${f} ${l}`); // must use the alias if you use alias at import
