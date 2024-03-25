"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function make_album(artist, title) {
    const album = {
        artist: artist,
        title: title
    };
    return album;
}
const album1 = make_album("Riaz", 'Formation');
const album2 = make_album("Tanveer", 'shape of you');
const album3 = make_album("Rizwan", 'shake it off');
console.log(album1);
console.log(album2);
console.log(album3);
