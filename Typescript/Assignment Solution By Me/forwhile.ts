var data1 = prompt("Enter a number");
var n:number = parseInt(data1);

console.log("Using for loop");
for(var i:number=1; i<=n; i++){
    if(i%5===0){
        continue;
    }
    console.log(i);
}

console.log("Now using while loop");
var j:number = 0;
while(j < n){
      j++;
    if(j%5===0){
        continue;
    }
    console.log(j);  
}
