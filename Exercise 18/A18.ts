let places = ["Saudi Arbia","Dubai","Amrica","Qatar","Eurape"]
console.log("orignal order ",places)

let copyArray = places.slice()
console.log("alphbetical order",copyArray.sort())
console.log("orignal order ",places)

console.log("reverse alphbetical order",copyArray.reverse())
console.log("orignal order ",places)

console.log("Reverse orignal order ",places.reverse())
console.log("Reverse orignal order Again ",places.reverse())

console.log("alphbetical order sort ARRAY",copyArray.sort().reverse())

let reverseSort = copyArray.sort()
console.log("sort reverse", reverseSort.reverse())


