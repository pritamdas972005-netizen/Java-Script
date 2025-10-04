//Write a program to print all keys of an object {name: "Pritam", age: 21, city: "Kolkata"} using for...in.
let student={
    name: "Pritam",
    age: 21,
    city:"kolkata"
};
for(let key in student){
    console.log(key);
}
//Write a program to print all values of an object {id: 101, marks: 85, grade: "A"} using for...in.
let student1={
    id:101,
    marks:85,
    grade:"A"
};
for(let value in student1){
    console.log(student1[value]);
}
