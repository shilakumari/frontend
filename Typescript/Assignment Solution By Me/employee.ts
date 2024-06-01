var employee = {
    id:1,
    name:"Shila",
    salary:900000
};

for(var emp in employee){
    console.log(emp);//get keys
    console.log(employee[emp]);//get values
}

//Destructuring
var {id,salary} = employee;
console.log(id+" "+salary);