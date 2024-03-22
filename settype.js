var Courses = new Set();
Courses.add("Angular");
Courses.add("React");
Courses.add("Node");
Courses.add("Serverless");
console.log(Courses.size);
console.log(Courses.values());
Courses.forEach(function (course) {
    console.log(course);
});
