// let a = new Person(`wrong tes`) // only can be used after class
class Person {
    greet(name) {
        console.log(`welcome ${name}`);
    }
}
let p = new Person();
p.greet(`Daffa`);
