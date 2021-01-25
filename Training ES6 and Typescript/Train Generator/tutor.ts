let person = {
    fname: "Daffa",
    lname: "Karyudi"
}

person[Symbol.iterator] = function*(){
    let properties = Object.keys(person)
    for (const t of person) {
        yield this[t];
    }
}

for (const p of person) {
    console.log(p);
    
}