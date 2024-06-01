let studentScore = new Map([["Bobi", 80], ["Bharath", 90], ["Shiway", 90]]);
console.log(studentScore.get("Bharath"));
console.log(studentScore.set("Shyam",68));
console.log(studentScore.size);
console.log(studentScore.delete("Bobi"));
console.log(studentScore.has("Bobi"));
//studentScore.clear();
console.log(studentScore);

console.log(studentScore.keys());
for(let keyOfstudentScore of Array.from(studentScore.keys())){
    console.log(keyOfstudentScore);
    console.log(studentScore.get(keyOfstudentScore));
}

console.log(studentScore.values());
console.log(studentScore.entries());

