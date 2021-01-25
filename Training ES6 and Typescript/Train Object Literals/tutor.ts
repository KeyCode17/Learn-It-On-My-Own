// var firstname = "Daffa"
// var lastname = "Karyudi"

// let person = {
//     firstname,
//     lastname,
//     fullname: firstname + lastname
// };

// console.log(person.firstname);
// console.log(person.lastname);
// console.log(person.fullname);

function createPerson(firstname, lastname, age){
    let fullname = firstname + " " + lastname;
    return{
        fullname,
        firstname,
        lastname,
        isSenior(){
            return age>60;
        }}
}

let p = createPerson("Ross","Geller",62);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior())

console.log("\n")
console.log("type 1 above")
console.log("type 2 below")
console.log("\n")

let ln = 'last name';
let person = {
    "first name": "Daffa",
    [ln]: "Karyudi"
};
console.log(person["first name"])
console.log(person[[ln]])
console.log(person)