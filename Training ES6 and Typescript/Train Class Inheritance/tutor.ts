// class Parent same as default in array/object
class Person {
    constructor(name) {
        console.log(`${name} Person constructor`);
        
    }
    getID(){
        return 10;
    }
}

class Employee extends Person{
    constructor(name){
        super(name) /* Needed because Parent had
                        constructorso super make it stop */
        console.log(`${name} Employee constructor`);
        
    }
    getID(){
        // return super.getID(); console shown Parent get.ID
        return 50; // console shown 50
    }
}

let e = new Employee(`Daffa`);
console.log(e.getID());
