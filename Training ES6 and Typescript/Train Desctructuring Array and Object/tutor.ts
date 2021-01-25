// let employee = ["Daffa", "Karyudi", "Male"];
// let [fname, lname, gender] = employee; //without default

let employee = ["Daffa", "Karyudi"];
let [fname, lname, gender="Male"] = employee; //with default
console.log(fname);
console.log(lname);
console.log(gender);

console.log("\n");
console.log("Above using Array");
console.log("Below using Object");
console.log("\n");

let employee = {
    fname: "daffa",
    lname: "karyudi",
    gender: "Male"
};

// let {fname, lname, gender} = employee; //without alias
// console.log(fname);
// console.log(lname);
// console.log(gender);

let {fname: f, lname: l, gender: g} = employee;

console.log(f);
console.log(l);
console.log(g);



