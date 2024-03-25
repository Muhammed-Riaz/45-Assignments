let current_usernames   :string[] = ["Safder","riaz","rizwan","Tanveer","Abdulhaque"];

let New_users  :string[]   = ["Ramzan","Riaz","Rizwan","Shahzeb","Zohaan"];

let current_usernames_lower :string[] =  current_usernames.map(user=> user.toLocaleLowerCase())

for(let New_user of New_users){
    if(current_usernames_lower.includes (New_user.toLocaleLowerCase())){
console.log(` ${New_user},is allready taken`)
}else{
    console.log(`${New_user},is avalible in list`)
}
}
