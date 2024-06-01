var password = "tEsT1234";
//Atleast one capital letter, alphanumeric min 4 and max 10
var regExp = /(?=.*[A-Z])\w{4,10}/;
if (password.match(regExp)) {
    console.log("Valid password");
}
else {
    console.log("Invalid password " + password);
}
