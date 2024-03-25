function show_magicians2(magicians:string[]):void{
    magicians.forEach(magicians =>console.log(magicians));
     
 }
 const magicians :string[] = ["shoaib","Asad","Riaz"];
 

 function make_great(magicians_Name:string){
    for(let magician of magicians){
        console.log(`${magicians_Name} ,${magician}`)
    }

 }



//    Question 43

function Make_great2(magicians:string[]):string[]{
    const greatmagicion :string[]=[];
    magicians.forEach(magicians =>console.log(magicians));
    return magicians ;
 }
 const magicians2 :string[] = ["shoaib","Asad","Riaz"];
const greatmagicion:string[]= Make_great2(magicians2)

Make_great2(magicians2);
make_great("the great");
show_magicians2(magicians)