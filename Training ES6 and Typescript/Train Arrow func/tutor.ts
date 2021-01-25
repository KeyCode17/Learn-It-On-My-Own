var getRegvalue = function(){
    return 10;
}
console.log(getRegvalue())


// const getArrowvalue = () => {
//     return 10;
// }
// if one line could use :
// const getArrowvalue = () => 10;

const getArrowvalue = (m:number,n:number) => 10*m+n;
console.log(getArrowvalue(5,20))

console.log(typeof getArrowvalue)