confirm("The Professor wants to enter the marks");
var maths = prompt("Enter the maths marks");
var physics = prompt("Enter the physics marks");
var chemistry = prompt("Enter the chemistry marks");

var average:number =(parseInt(maths) + parseInt(physics) + parseInt(chemistry))/3;

if(average<70){
    console.log("C Grade");
}else if(average>70 && average<90){
    console.log("B Grade");
}else{
    console.log("A Grade");
}