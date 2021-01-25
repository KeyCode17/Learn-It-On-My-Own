class PersonLong {
    public fname: string;
    public lname: string;
    constructor(fname: string, lname: string) {
        this.fname = fname;
        this.lname = lname;
        console.log(`PersonLong Constructor ${this.fname} ${this.lname}`);
    }
}

class PersonShort {
    constructor(fname: string, lname: string) {
        console.log(`PersonShort Constructor ${fname} ${lname}`);
    }
}

new PersonLong("Daffa", "Karyudi")
new PersonShort("Daffa", "Karyudi")