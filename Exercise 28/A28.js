"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Any age we put in variable and print get result
let Age = 20;
if (Age < 2) {
    console.log("person is baby");
}
if (Age == 2 && Age < 4) {
    console.log("person is toddler");
}
else if (Age == 4 && Age < 13) {
    console.log("person is kid");
}
else if (Age == 13 && Age < 20) {
    console.log("person is teenager");
}
else if (Age == 20 && Age < 65) {
    console.log("person is an adult");
}
else if (Age >= 65) {
    console.log("person is an elder");
}
