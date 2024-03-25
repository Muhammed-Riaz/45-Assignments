function sandwich(...item:string[]):void{
    console.log(" your sandwich order is");
    for(let i=0;i<item.length;i++){
        console.log(`> ${item[i]}`)
    }
}
sandwich('bread' , 'capsicum','tomato');
sandwich('chicken','beef','cheese');
sandwich('garlic chicken','mayo sauce','lettuce');