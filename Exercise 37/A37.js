"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Make_shirt2(size = "large", text = "i love typescript") {
    console.log(`you have a order ${size} shirt that says ${text}`);
}
Make_shirt2();
Make_shirt2('medium');
//different message
Make_shirt2('small', 'i need a Red shirt');
