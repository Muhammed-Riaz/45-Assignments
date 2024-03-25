"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians2(magicians) {
    magicians.forEach(magicians => console.log(magicians));
}
const magicians = ["shoaib", "Asad", "Riaz"];
function make_great(magicians_Name) {
    for (let magician of magicians) {
        console.log(`${magicians_Name} ,${magician}`);
    }
}
//    Question 43
function Make_great2(magicians) {
    const greatmagicion = [];
    magicians.forEach(magicians => console.log(magicians));
    return magicians;
}
const magicians2 = ["shoaib", "Asad", "Riaz"];
const greatmagicion = Make_great2(magicians2);
Make_great2(magicians2);
make_great("the great");
show_magicians2(magicians);
