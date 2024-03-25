"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function create_car(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const mycar = create_car("toyota", "corola", { color: "white", year: "2024" });
console.log(mycar);
