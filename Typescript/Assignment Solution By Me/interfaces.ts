interface Book{
    title:string;
    isbn:string;
    description:string;
    price:number;
}

var book:Book={
    title:"Zoo",
    isbn:"978-93-89053-11-1",
    description:"Zoo book for children",
    price:4999
}

for(var item in book){
   // console.log(item);
    console.log(book[item]);
}