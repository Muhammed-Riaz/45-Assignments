// thumbnil

let Users:string[] = ["Admin","Riaz","Rizwan","Tanveer","abdulhaque"];
for(let User of Users){
    if(User === "Admin"){
   console.log("Hello Admin , Would you like to see a status report?")
    }else{
        console.log(`Hello ${User} thank you logging in again`)
    }

}