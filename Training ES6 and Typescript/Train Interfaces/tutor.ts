interface Person{ 
    fname: string;
    lname: string;
    age?: number; // interface make you must insert all value in property but
}                // if you add ? in front of property it turn in to optional

let employee1: Person = {
    fname:"Daffa",
    lname:"Karyudi",
    age:19
}

let employee2: Person = {
    fname:"Ross",
    lname:"Geller"
}