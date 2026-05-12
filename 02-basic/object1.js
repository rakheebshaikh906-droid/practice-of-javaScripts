//object in javascript

//object literal
let person = {
    name: "rakheeb",
    age: 20,
    city: "kolkata",
    hobbies: ["coding", "gym", "sports"],
    greet: function () {
        console.log("Hello, my name is " + this.name);
    }
};

console.log(person.name);// rakheeb // dot notation 
console.log(person["name"]);// rakheeb // bracket notation

//add new property to object
person.city = "aurangabad";
console.log(person.city); // aurangabad

//frezz object
Object.freeze(person.age);
person.age = 25;
console.log(person.age); // 20

