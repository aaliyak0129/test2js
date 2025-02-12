let people = [
    { name: "aaliya", age: 20, city: "bhopal" },
    { name: "saad", age: 22, city: "bhopal" },
    { name: "zaid", age: 20, city: "indore" },
    { name: "ayush", age: 22, city: "jaipur" },
    { name: "zainab", age: 28, city: "old bhopal" }
];

let filteredPeople = people.filter(person => person.age > 20);

console.table(filteredPeople);
