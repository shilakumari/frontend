let password:string = "tEsT1234";

//Atleast one capital letter, alphanumeric min 4 and max 10
let regExp:any = /(?=.*[A-Z])\w{4,10}/
if(password.match(regExp)){
    console.log("Valid password");
}else{
    console.log("Invalid password "+password);
}