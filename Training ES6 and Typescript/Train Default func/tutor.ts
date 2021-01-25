// let getValue = function(value){
//     console.log(value)
// }
// getValue(); // without default
let special = 0.1;
let specialFunc = () => 20;
// let getValue = function(value=bonus, bonus=10) // not allowed
let getValue = function(value=10, bonus=value*special, surprise=bonus+specialFunc()){ // with default and allowed
    console.log(value + "and" + bonus + "and" + surprise)
    console.log(arguments.length)
}
// getValue({value insert}, {bonus insert}, {surprise insert})

getValue(); // console output "10 and 1 and 21" [because default was 10 and 1 and 0]
getValue(20); // Console output "20 and 2 and 22" [doesn't need to insert undefined if second,third,ETC to make default]
getValue(30,45); // Console output "30 and 45 and 65" [surprise used default 45(from bonus) + specialFunc()]
getValue(1,2,3); // console output "1 and 2 and 3"
getValue(undefined,30) // console output "10 and 30 and 50" [insert undefined for first parameter to make default]
getValue(undefined,undefined,25) // console output "10 and 1 and 25" [because value and bonus insert undefined they using default]
