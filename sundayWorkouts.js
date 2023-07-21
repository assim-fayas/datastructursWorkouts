nullish operator ??

let user;

console.log(user ?? "user is not defined");

let day = 8;

switch (day) {
    case 1: "its monday"
        break;
    case 2: "its tuesaday"
        break;
    case 3: "its wednesday"
        break;
    case 4: "its thursday"
        break;
    case 5: console.log("its friday");
        break;
    case 6: "its saturday"
        break;
    case 7: "its sunday"
        break;
    default: console.log("invalid input");
        break;
}


arrow function

let ask=(question,yes,no)=>{

    (confirm(question)) ? yes() : no()

}
console.log(ask("Do you agree", ()=>console.log("you agreed"),()=>console.log("you cancellrd the execution")));


object

let User = {}
User.name = "asim"
User.surname = "fayas";

console.log(User);
User.name = "sufad"
console.log(User);
delete User.name
console.log(User);



let salaries = {
    john: 200,
    asim: 200000,
    sufad: 20020,
    adhil: 20087,
}
let sum=0;
for (let i in salaries) {
    sum += salaries[i];
}
console.log(sum);


multiply all numeric value of object by 2



 function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof(menu[key]===Number)){
            menu[key]=menu[key]*2
        }
    }

}

let menu={
    height:300,
    width:100,
    title:"my menue"
}
console.log(multiplyNumeric(menu));

console.log(menu);


calculator

let calculator={

    read(value1,value2){
            this.value1=value1
            this.value2=value2
           },

           sum(){
return this.value1 + this.value2

           },
           mul(){
return this.value1 * this.value2

           }

}

calculator.read(30,4)
console.log(calculator.sum());
console.log(calculator.mul());
console.log(calculator);


let user = {
    name: "Asim",
    age: 12,
    address:{
        city:"calicut",
       country :"india"
       }

}

let clone2 = JSON.parse(JSON.stringify(user));
 console.log("before clone2",user);
 clone2.address.city="kannur"
 console.log("after  updatingclone2",user);


let clone1 = Object.assign(user);


console.log("clone1",clone1);
console.log("user",user);

clone1.name="sufad"
clone1.address.city="vadakara"


console.log("clone1 updated",clone1);
console.log("user updated",user);



higher order function

let arr=[44,3,21,6,4]



 function calculate(arr,logic){
 let rslt=[]
    for(let i=0;i<arr.length;i++){

           rslt.push(logic(arr[i]))
    }
    return rslt
 }

 function diameter(r){
return 2*r
 }

 function area(r){
   return Math.floor(2*Math.PI*r*r)
 }

 function circumference(r){
   return Math.floor(2*Math.PI*r)
 }

 console.log(calculate(arr,diameter));
 console.log(calculate(arr,area));
 console.log(calculate(arr,circumference));



console.log(this);


let car= "G wagon" ?? "its null"

console.log(car);


call apply bind




Question 1:
Create an object called person with a property called name that has the value "John". Write a function called sayHello that takes one argument,
 greeting, and prints "Hello, {greeting}! My name is {name}" where {greeting} is the argument passed to the function and {name} is the value of
 the name property of the person object. Use the call() function to invoke the sayHello function with the argument "Good morning".


person ={
    name:"John"
}


 function sayHello(greeting){
console.log(`hello , ${greeting}! My name is ${this.name}`);
}
sayHello.call(person,"good  morning")



Question 2:
Define a function called getFullName that takes two arguments, firstName and lastName, and returns the full name in the format
"{firstName} {lastName}". Now, create an object called user with properties firstName and lastName having
 values "John" and "Doe" respectively. Use the call() function to invoke the getFullName function with the user object
  as the this value and store the result in a variable called fullName.


 function getFullName(firstName,lastName){
    return `${firstName} ${lastName}`
 }

 user={
    firstName:"John",
    lastName:"Doe"
 }

 let rslt=getFullName.call(user,user.firstName,user.lastName)
 console.log(rslt);




 Question 3:
Create a function called calculateArea that calculates the area of a rectangle using the formula width * height.
Define an object called rectangle with properties width and height having values 10 and 5 respectively.
Use the call() function to invoke the calculateArea function with the rectangle object as the this value and
store the result in a variable called area.

function calculateArea(height, width) {
    return height * width
}
let rectangle = {
    height: 10,
    width: 5
}

let area = calculateArea.call(rectangle, rectangle.height, rectangle.width)
console.log(area);


apply


Question:
Write a function called findMax that finds the maximum value in an array of numbers.
Use the apply() method to invoke the Math.max() function with the array as arguments. Finally, return the maximum value found.

For example, findMax([4, 8, 2, 10, 6]) should return 10.

let array=[22,4,5,66,7,1]

function findMax(value){


    return Math.max.apply(null,value)


}


maxvalue=findMax(array)
console.log(maxvalue);


bind

bind() method is used to create a new function with a specified this value and, optionally,
 pre-defined arguments. It allows you to set the this value of a function explicitly,
  regardless of how it is called.


function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }

  var person = {
    name: "John"
  };

  var greetPerson = greet.bind(person, "Hello");
  greetPerson();


constructor function

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayhellow=function(){
    console.log(`Hello ${this.name} , you are ${this.age} years old `);
  }
}

var user = new Person("John", 29);


console.log(user);
user.sayhellow()


object destructuring

let user = {
  name: "asim",
  age: 12,
  address: {
    city: "calicut",
    state: "kerala"

  }
}

const { name:lname, age:page, address: { city, state } } = user


console.log(lname);
console.log(page);


inheritance

class animal {
constructor(legs){
 this.legs=legs
}
walk(){
  console.log(`this animal walk on ${this.legs} legs`);
}
}

class dog extends animal{
  constructor(legs){
    super(legs)
  }
  cry(){
    console.log("the dog is barking");
  }
}
const shepered =new dog(4)

shepered.walk()
shepered.cry()


IIF

let rslt=(function(a,b){
return a+b;
})(1,2)

console.log(rslt);

promise

function sum(a,b){
  return new Promise((resolve,reject)=>{
    if(a==0){
      reject("plese enter number greater than zero")
    }else{
      resolve(a+b)
    }
  })
}

sum(8,1)
.then((rslt)=>{
  console.log(rslt);
})

.catch((error)=>{
  console.log(error);
})

const promise =new Promise((resolve,reject)=>{
  setTimeout(()=>{
resolve("resolve mesage")
  },1000)
})
.then((message)=>{
console.log(message);
return new Promise((resolve,reject)=>{
  setTimeout(()=>{
  resolve("resolved second message")
},3000)
}).then((message1)=>{
  console.log(message1);
})
})


function sum(c) {
  return new Promise((resolve, reject) => {

    if(c === undefined){
    reject("oops value is empty")
    }else{
      resolve(c)
    }
  })
}
let sum3
let sum1=3
 let sum2=4

Promise.any([sum(sum3), sum(sum2), sum(sum1)])
  .then((value) => {
    console.log(value);
    // console.log(value[0]+value[1]+value[2]);
  })
  .catch((error) => {
    console.error("Error:", error);
  })


call back function

function greet(name,cb){
console.log("hai,welcome");

cb(name)
}

function person(name){
  console.log(`how are you ${name}`);
}

greet("Asim",person)


async && await

function getData() {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      let data = { name: "asim", place: "vatakara" }


      resolve(data)

    }, 1000)


  })

}

async function getUser() {
  try {

    let userData = await getData()
    return userData
  }
  catch (error) {
    console.log("error :", error.message);
    throw error
  }

}

getUser()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("error:", error);
  })
  .finally(()=>{
    console.log(" user deleted");
  })

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and my age is ${this.age}`);
  }
}

class Student extends Person {
  constructor(name, age, school) {
    super(name, age);
    this.school = school;
  }

  study() {
    console.log(`I'm studying at ${this.school}`);
  }
}

const student=new Student("nameer",22,"panagodi")
student.greet()
student.study()


var y = 20;

function bar() {
  
  var y = 200;
  
  function baz() {  
      console.log(y);
    }

    baz();
}

bar();


let array=[1,2,3,4,5]

let evenNumber=array.filter((value)=>{
   return value%2===0
  
}).map((value)=>{
  return value*2
}).reduce((acc,curr)=>{

  acc+=curr
  return acc
},0)

console.log(array);
console.log(array.slice(1,3));
console.log(array.splice(0,2));

array.forEach((value)=>{
console.log(value);
})

console.log(rsl);

console.log(evenNumber);

function sum(a,b){
  return new Promise((resolve,reject)=>{
    if(a==0){
      reject("oops,value  must be greater than 0")
    }else{
      resolve(a+b)
    }
  })
}
sum(0,-1)
.then((value)=>{
  console.log(value)
})
.catch((error)=>{
  console.log(error);
})





function sum(c) {
  return new Promise((resolve, reject) => {

    if(c === undefined){
    reject("oops value is empty")
    }else{
      resolve(c)
    }
  })
}
let sum3
let sum1=3
 let sum2=4

Promise.race([sum(sum3), sum(sum2), sum(sum1)])
  .then((value) => {
    console.log(value);
    // console.log(value[0]+value[1]+value[2]);
  })
  .catch((error) => {
    console.error("Error:", error);
  })
function data(){
  return new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
      resolve({name:"Asim",place:"calicut"})
    },1000)
   
  })
}




async function user(){
try {
  let user=await data()
  return user
} catch (error) {
  console.log("error:",error);
}

}

user()
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error);
})

generator function

function * countupto(limit){
  for (let i = 0; i < limit; i++) {
    yield i;
  }
}
const seequece=countupto(5)
console.log(seequece.next().value);
console.log(seequece.next().value);
console.log(seequece.next().value);
console.log(seequece.next().value);
console.log(seequece.next().value);

function sum(a){
  return function(b){
    return a+b
  }
}

const sum1=sum(12)
console.log(sum1);
console.log(sum1(2));
