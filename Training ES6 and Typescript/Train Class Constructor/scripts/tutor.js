"use strict";
class PersonLong {
    constructor(fname, lname) {
        this.fname = fname;
        this.lname = lname;
        console.log(`PersonLong Constructor ${this.fname} ${this.lname}`);
    }
}
class PersonShort {
    constructor(fname, lname) {
        console.log(`PersonShort Constructor ${fname} ${lname}`);
    }
}
new PersonLong("Daffa", "Karyudi");
new PersonShort("Daffa", "Karyudi");
//# sourceMappingURL=tutor.js.map