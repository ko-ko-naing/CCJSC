

//1 string data type
console.log('hello world');

//2 number data type
console.log(12);
console.log(12.15);

//3 Boolean data type
console.log(true);
console.log(false);

//4 nudefined 
console.log(undefined);

//5 null
console.log(null);

var a;
console.log(a);
var b = null;
console.log(b);

//variable

var aungaungName = "Aung Aung";
console.log(aungaungName);
//changing value - override
aungaungName = "changed aung aung";
console.log(aungaungName);

// Lesson 3 - variable naming convention
var aungaung_name;
var AngGyi;

// JavaScript version
var ES5;
// ES5 version
var number = 12;
console.log(number);


var ES6;
// ES6 variable naming convention
// let 
let aungaungNo = "Aung Aung";
console.log(aungaungNo);

// difference between let and var  

// const is constant - it's never changed or override 
const kyawkyaw_name = "kyawkyaw";
const PI = 3.14;


// type of correction(+)
var number1 = 12;
var number2 = 13;
console.log(number1 + number2);

number1 = "12";
number2 = 14;
console.log(number1 + number2);

let name = "ko ko naing";
let age = 19;
let isMarried = false;
console.log(name + " age is " + age + " is Married: " + isMarried);
 
//**** */
let num1 = "12";
let num2 = 14;
//result is -2
console.log(num1 - num2);

//////////////////////////////// operators and operator precedence //////////////////////////////////
// + - * / %
console.log(12 + 12);
console.log(12 - 10);
console.log(12 * 12);
console.log(12 / 2);
console.log(12 % 2);

//operator precedence 
let x = 20 - 7 * 10 / 3;
let y = 1;
y = y + 1;
console.log(y);
y += 1; // shorthand
y++; // increment
x -= 1;
x--;


///////////////////////// if else and truthy and falsy //////////////////////////////////////
let name1 = "Ko Ko Naing";

if (name1 === "Ko Ko Naing") {
    console.log("Your name is " + name1);
} else {
    console.log("Your name is not " + name1);
}

//////////////////////// truthy and falsy //////////////////////////////////////
// 1 false
// 2 0(zero)
// 3 '' or "" (empty string)
// 4 null
// 5 undefined
// 6 Not a number (NaN)

if (a) {
    console.log(true);
} else {
    console.log(false);
}


/////////////////////////// Conditions and operators /////////////////////////////////////
let z = undefined;
if (z == undefined) {
    console.log(true);
} else {
    console.log(false);
}

/// > < >= <=  
if (b > 10) {
    console.log(b + 'greater than 10');
} else {
    console.log(b + 'less than 10');
}

// if() else if()
let num = 10;
if (num == 10) {
    console.log('num is equal to 10');
} else if (num > 10) {
    console.log('num is greater than 10');
} else if (num < 10) {
    console.log('num is less than 10');
} else {
    console.log('nothing');
}



/////////////// and gate  or gate /////////////
let age1 = 18;
if (age1 >= 1 && age1 <= 18) {
    console.log('He is young boy.');
} else if (age1 >= 18 && age1 <= 30) {
    console.log('He is man.');
} else if (age1 >= 30 && age1 <= 60) {
    console.log('He is old.');
} else {
    console.log('You are too old');
}

let c = 11;
if (c > 10 || c < 10) {
    console.log('condition true');
} else {
    console.log('condition false');
}

///////////////// Function Declaration and Function expression ////////////////
//function declaration

function showName(name) {
    alert(name);
}

showName("kokonaing");

function helloWorld() {
    console.log('hello world');
}

helloWorld();


//function expressions
var showMGMGAge = function () {
    let age = 19;
    console.log('Mg Mg age is ' + age);
}
showMGMGAge(); 


///////////////////////// return in function and es6 function ////////////////////////
function helloWorld() {
    return "hello world";
}
helloWorld();
console.log(helloWorld());

function sumNum(num1, num2) {
    return num1 + num2;
}
let result = sumNum(12, 13);
console.log(result);    

// Es6
let elloWorld = () => {
    console.log("hello world");
};

let showAge = age => age;

let sumNu = (num1, num2) => {
    return num1 + num2;
}

let resultNum = sumNu(12, 12);
console.log(resultNum);



/////////////////////////////  intro array basic syntax //////////////////////////////
let myName = "KKN";

let fruits = ["orange", "apple", "banana"];

let kknBio = ["Ko Ko Naing", 23, "Programmer", false];

console.log(fruits.length);

fruits[3] = "watermelon";

console.log(fruits);


//////////// JS array methods //////////
let bio = [];
let insertDataToBioArray = (bioName, bioAge, bioJob) => {
    bio.push(bioName);
    bio.push(bioAge);
    bio.push(bioJob);
}
insertDataToBioArray("Ko Ko Naing", 23, "Data Engrying");
console.log(bio);

/// push method is injecting data into array last /////////////

let unShiftArray = ["data1", "data2", "data3"];
let unShiftData = (unShiftName, unShiftAge) => {
    unShiftArray.unshift(unShiftName);
    unShiftArray.unshift(unShiftAge);
}

unShiftData("Ko Ko", 24);
console.log(unShiftArray);

//////////////////// Js default functions //////////////////
let nameString = "Ko Ko Naing";
console.log("name length :" + nameString.length);
console.log("name index :" + nameString.indexOf("a"));
console.log("type of name : " + typeof nameString);


let popArray = ['A', 'B', 'C', 'D', 'E', 'F'];
popArray.forEach(a => console.log("Character : " + a));
popArray.pop(); //// remove the last element
console.log(popArray);



/////////////// For Loop - looping //////////////////////////////////
console.log("line 1");
console.log("line 2");
console.log("line 3");
console.log("line 4");
console.log("line 5");

console.log("----------------------------------------------------------------");

for (let i = 0; i < 5; i++) {
    let num = i + 1;
    console.log("line " + num);
}


///////////////// show data array with for loop ////////////////
let emails = [
    "kokonaingk72@gmail.com",
    "myakayzin12@gmail.com",
    "naingzawd@gmail.com",
    "aungkhing32@gmail.com",
    "hlakyaing25@gmail.com"
];

let showEamil = () => {
    emails.forEach(email => {
        console.log(email);
        document.write(email);
        document.write('<br />');
    });
 }

showEamil();


//////////// while loop //////////////////////////////////
let i = 0;
while (i < 10) {
    let num = i + 1;
    console.log("hello world!" + num);
    i++;
}
 
let t = 0;
do {
    console.log("hi!" + t);
    t++;
} while (t < 10);


///////////////// Javascript objects //////////////////
let car = {
    name: "Honda",
    color: "white",
    model: "2018",
    price: "100,000,000",
    priceUnit: "MMK",

    fullName: function () {
        return "koko";
    },

    carName: (name) => name,

    carPrice() {
        console.log("I'm car price method"); // It's called method because it's in object
        return "100,000";
    }
};

console.log(car.name, car.color, car.model, car.price, car.priceUnit);
car.name = "isuzu";
console.log(car.name);
console.log(car.carPrice())
console.log(car.carName("Toyota"));


//////////////////////////////// Introduction to  this keyword in Javascript  //////////////////////////////////
let cycle =  {
    name: "Jialing",
    model: 2015,
    detail() {
        console.log(this.name);
        console.log(this.model);
    }
     
}
console.log("================================");

console.log(cycle.detail());

console.log("****")
let objSample = {
    name: "objSample",
}

let Person = {};
Person.name = "Ko Ko Naing";
Person.age = 19;
Person.bioJob = "Programmer";

console.log("===== " + Person.name)


////////////////// Using JavaScript Date Object //////////////////////////////////
let date = new Date();
let currentDate = date.getFullYear();
console.log(currentDate);


//////////////////////////// Constructor //////////////////////////////////
let aungaungBio = new function(name, age) {
    this.name = name;
    this.age = age;
}

function Knowledge(name, age) { 
    this.name = name;
    this.age = age;
}

let kokonaing = new Knowledge("Ko Ko Naing", 19);
console.log(kokonaing);


function carDeatials(name, model, date) {
    this.name = name;
    this.model = model;
    this.date = date;
}

let bmw = new carDeatials("BMW", 2015, 1982);
let mercedes = new carDeatials("Mercedes", 2019, 2000);
console.log(bmw);
console.log(mercedes);


//////////////// not equal operator and switch condigion //////////////////
let age2 = 15;
if(16 != age2) console.log("You are not equal");


let grade = "A";
switch (grade) { 

    case "A": 
        console.log("Go to Class: " + grade);
        break; 
    
    case "B":
        console.log("Go to Class: " + grade);
        break; 
    
    case "C":
        console.log("Go to Class: " + grade);
        break;
    case "D":
        console.log("Go to Class: " + grade);
        break;
    
    default:
        console.log("Invalid grade: " + grade);

}


/////////// block //////////////////////////////////
/// global variables ///////////////
let age3 = 19;
console.log("Age: " + age3);

if (true) {
    let bornYear = 2000;
}

// console.log("BirthYear: " + bornYear);
console.log("Yes");