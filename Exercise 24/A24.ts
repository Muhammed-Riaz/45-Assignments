let tests:string = "Riaz"

// Equal to and unequal to
console.log(tests=="Riaz")
console.log(tests !=="riaz")  //! not equal toki sign



// test neumrical
let num = 10;
console.log(num==10)
console.log(num !==10)
// greater and less then <>
let greaterorless=10;
console.log(greaterorless<12)
console.log(greaterorless>8)
// greater than equal and less equal to <= >=

let Num2= 15+2
console.log(Num2>=12)
console.log(Num2<=10)

// test using "and " and "or"
var Ary  = [111 ,"Riaz"]
console.log(Ary)

let CountNum =80;
if(
    CountNum >=80 && CountNum<=79
) {
    console.log("1st position")   //Fail && "And" 2 statement true result true 1 false result false
}else{
    console.log("Fail")
}

// 2nd or operator

let Numb = 15
console.log(Numb <=20 || Numb >=20 )      // ||pipe "or" ,any one statement true result is true

// test whether item in array item is not array

let arryitem = ["Riaz",221]         //true  
let stringitem ="Riaz"  ;            // false

console.log(Array.isArray(arryitem) )
console.log(Array.isArray(stringitem) )





