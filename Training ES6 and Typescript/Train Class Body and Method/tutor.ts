class Person{
    constructor(name){
        console.log(`${this.name} Constructor`)
    }

    static staticTesting(name){ // static static(choosename)
        console.log(`static ${this.name}`);// this.name showing class name
    }

    greetPerson(){
        /* console.log(`Hello $this.name`);*/   /* it can be used without "var self = this"
                                                    because "this" in the constructor   */
        
        () => console.log(`Hello ${this.name}`);
    }

}
let p = new Person("Daffa");
Person.staticTesting();
p.greetPerson();
