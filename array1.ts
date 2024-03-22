var vaccines:Array<string> = ["J&j", "pfizer","Sputnik"];

vaccines.push("Covaxin");

for(var i:number = 0; i < vaccines.length; i++){
    console.log(vaccines[i]);
}

//Destructuring
var[a, b, c, d] = vaccines;
console.log(a);
console.log(b);
console.log(c);
console.log(d);