let AllGuest=[ 'Tanveer', 'Ismail', 'Zaib', 'Riaz',  ]
console.log("Iam really sory i can only two people invite for dinner\n")

console.log(`sorry Mr ${AllGuest[3]} I can't invite  to dinner`)
AllGuest.pop();

console.log(`sorry Mr ${AllGuest[2]} I can't invite  to dinner\n`)
AllGuest.pop()


for(let i=0;i<AllGuest.length;i++){
    console.log(`Mr ${AllGuest[i]} you are Still invited !`)
}

 AllGuest.pop()
 AllGuest.pop()

console.log(AllGuest)




