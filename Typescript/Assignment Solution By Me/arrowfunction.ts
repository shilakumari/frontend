 var n:number = 71;

 var isPrime:boolean = false; 
 var i:number=2;
 var f1=(n):boolean=> {
     while(i<=n/2){
        if(n%i===0){
            isPrime=true;
            break;
        }
        ++i;
     }
    return isPrime;
 };

if(!f1(n)){
    console.log(n +" Prime number");
}else{
    console.log(n +" Not a prime number");
}
