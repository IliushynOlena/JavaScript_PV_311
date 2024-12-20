// console.log(obj);
// var obj = new Object();

// var obj = {}

// obj.name = "Olena";
// obj.name = "Mukola";
// obj.number = 1010;
// obj.address = "Soborna 16";
// console.log(`Name : ${obj.name}. Address : ${obj.address}`);
// delete obj.address;
// console.log(`Name : ${obj.name}. Address : ${obj.address}`);

// let product = {
//     name : "Motorola G8",
//     price:3500,
//     memory:256,
//     isLocked:true,
//     aplicatios:["Facebook","PlayMarket","Viber"],
//     owner:{
//         name:"Vitia",
//         surname:"Ivanchuk"
//     }
// }
// console.log(`Model ${product.name}. 
// Owner:${product.owner.name} ${product.owner.surname}`);

/*
// -=-=-=-=-=-=-=-=- objects -=-=-=-=-=-=-=-=-
var obj = new Object();
var obj = {};

// 1 - property access using object['key']
var product = {};
product["name"] = "Ball";
product['size'] = 20.5;
product['price'] = 420;
product['type'] = "mini-football";

product["name"] = "Football"; // override

console.log("Name: " + product['name']);
console.log("Size: " + product['size']);
console.log("Type: " + product['type']);
console.log("Color: " + product['color']);

// 2 - property access using object.key
var student = {};
student.name = "Vova";
student.age = 30;

student['Average Mark'] = 7.8; // allows white-space characters
student.averageMark = 7.8;

// delete property of object
delete student.averageMark;

student.address = "Leemontova 45b";
//delete student.address;
if ('address' in student) {
    alert(student.address);
}
else {
    alert("Student has not an address!");
}

// view all properties
for (var property in student) {
    alert(property + ": " + student[property]);
}


// create object with properties initialization
var car = {
    model: "X",
    power: 250,
    color: "Dark Blue",
    year: 2018
};

var res = "\tCar info:\n";
for (var property in car) {
    res += property + ": " + car[property] + '\n';
}
alert(res);


  
// inner objects
let person = {
    firstName: "Bob",
    lastName: "Bobovich",
    birthdate: 2010,
    address: {
        street: "Soborna",
        city: "Rivne",
        building: "5a"
    },
    cars: ["Nissan Primera", "Ford Focus", "Toyota Avensise"]
};

//alert(`Address: ${person.address.street} ${person.address.building}, ${person.address.city}`);


// TODO: get all properties recursovely

// function with object
function addCarToPerson(person, newCar) {
    person.cars.push(newCar);
}
function showAllCars(person) {
    alert("Cars: " + person.cars);
}

let name1 = prompt("Enter model of car : ")

addCarToPerson(person, name1);
showAllCars(person);
 */

// object with methods
//var let const
const player =  {
    login: "super_user123",
    password: "Qwerty",
    email: "bablafra@gmail.com",
    score: 0,

    print: function () {
        console.log(`User: ${this.login} with score: ${this.score}`);
    },
    increaseScore(value) {
        this.score += value;
        if (this.score > 100)
            this.score = 100;
    }
};

player.print();

player.login += "!!!";
player.increaseScore(2);

player.print();
/*
// constructor functions
function Rectangle(width, heigth) {
    this.width = width;
    this.heigth = heigth;
    this.square = width * heigth;
    this.perimeter = width * 2 + heigth * 2;
};

let rect = new Rectangle(20, 12);
alert(`Square: ${rect.square} cm^2`);
*/
