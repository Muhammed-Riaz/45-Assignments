function show_magicians(magicians:string[]):void{
    magicians.forEach(magicians =>console.log(magicians));
     
 }
 const magicians :string[] = ["shoaib","Asad","Riaz"];
 

 function make_great(magicians_Name:string){
    for(let magician of magicians){
        console.log(`${magicians_Name} ,${magician}`)
    }

 }
make_great("the great")