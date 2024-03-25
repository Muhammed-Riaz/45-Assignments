"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Newguest = ["Ismail", "Zaib", "uzair", "A khalique"];
console.log(Newguest);
console.log("we find big dinner table so we invite 3 more friends\n");
Newguest.unshift("Tanveer");
console.log(Newguest);
Newguest.splice(3, 0, "Riaz");
Newguest.push("Amaan");
console.log(Newguest);
for (let i = 0; i < Newguest.length; i++) {
    console.log(`${Newguest[i]} ! you are invited for dinner `);
}
