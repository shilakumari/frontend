var studentScore = new Map([["Bobi", 80], ["Bharath", 90], ["Shiway", 90]]);
console.log(studentScore.get("Bharath"));
console.log(studentScore.set("Shyam", 68));
console.log(studentScore.size);
console.log(studentScore.delete("Bobi"));
console.log(studentScore.has("Bobi"));
//studentScore.clear();
console.log(studentScore);
console.log(studentScore.keys());
for (var _i = 0, _a = Array.from(studentScore.keys()); _i < _a.length; _i++) {
    var keyOfstudentScore = _a[_i];
    console.log(keyOfstudentScore);
    console.log(studentScore.get(keyOfstudentScore));
}
console.log(studentScore.values());
console.log(studentScore.entries());
