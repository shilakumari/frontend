var cell = "1234567890";
var regExpression = /[0-9]{10}/;
if (cell.match(regExpression)) {
    console.log("Cell number is valid");
}
else {
    console.log("invalid cell number " + cell);
}
