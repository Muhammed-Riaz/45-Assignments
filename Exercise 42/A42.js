"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(magicians => console.log(magicians));
}
const magicians = ["shoaib", "Asad", "Riaz"];
function make_great(magicians_Name) {
    for (let magician of magicians) {
        console.log(`${magicians_Name} ,${magician}`);
    }
}
make_great("the great");
