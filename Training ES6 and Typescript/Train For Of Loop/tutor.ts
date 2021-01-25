let colors = ['red', 'Blue', 'Green'];

for(let index in colors){
    console.log(colors[index]);

};

let num = [1,2,3,4,5]

for (let tes of colors) {
    console.log(num);
};

let page = [1,2,3]

console.log(page.length);
let j = 3
for (let i = 0; i < page.length; i++) {
    console.log(i);
    
    while (page.length < 10) {
        j++;
        j = j;
        page.push(j);
    }
}
console.log(page);

let letters = "ABC";

for (const letter of letters) {
    console.log(letter);
};