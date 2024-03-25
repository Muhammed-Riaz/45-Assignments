"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sandwich(...item) {
    console.log(" your sandwich order is");
    for (let i = 0; i < item.length; i++) {
        console.log(`> ${item[i]}`);
    }
}
sandwich('bread', 'capsicum', 'tomato');
sandwich('chicken', 'beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce', 'lettuce');
