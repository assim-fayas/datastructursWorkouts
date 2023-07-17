//nullish operator ??

// let user;

// console.log(user ?? "user is not defined");

// let day = 8;

// switch (day) {
//     case 1: "its monday"
//         break;
//     case 2: "its tuesaday"
//         break;
//     case 3: "its wednesday"
//         break;
//     case 4: "its thursday"
//         break;
//     case 5: console.log("its friday");
//         break;
//     case 6: "its saturday"
//         break;
//     case 7: "its sunday"
//         break;
//     default: console.log("invalid input");
//         break;
// }


//arrow function

// let ask=(question,yes,no)=>{

//     (confirm(question)) ? yes() : no()

// }
// console.log(ask("Do you agree", ()=>console.log("you agreed"),()=>console.log("you cancellrd the execution")));


//object

// let User = {}
// User.name = "asim"
// User.surname = "fayas";

// console.log(User);
// User.name = "sufad"
// console.log(User);
// delete User.name
// console.log(User);



// let salaries = {
//     john: 200,
//     asim: 200000,
//     sufad: 20020,
//     adhil: 20087,
// }
// let sum=0;
// for (let i in salaries) {
//     sum += salaries[i];
// }
// console.log(sum);


//multiply all numeric value of object by 2



//  function multiplyNumeric(menu){
//     for(let key in menu){
//         if(typeof(menu[key]===Number)){
//             menu[key]=menu[key]*2
//         }
//     }

// }

// let menu={
//     height:300,
//     width:100,
//     title:"my menue"
// }
// console.log(multiplyNumeric(menu));

// console.log(menu);


//calculator

// let calculator={

//     read(value1,value2){   
//             this.value1=value1
//             this.value2=value2       
//            },

//            sum(){
// return this.value1 + this.value2

//            },
//            mul(){
// return this.value1 * this.value2

//            }

// }

// calculator.read(30,4)
// console.log(calculator.sum());
// console.log(calculator.mul());
// console.log(calculator);


// let user = {
//     name: "Asim",
//     age: 12,
//     address:{
//         city:"calicut",
//        country :"india"
//        }

// }

// let clone2 = JSON.parse(JSON.stringify(user));
//  console.log("before clone2",user);
//  clone2.address.city="kannur"
//  console.log("after  updatingclone2",user);


// let clone1 = Object.assign(user);


// console.log("clone1",clone1);
// console.log("user",user);

// clone1.name="sufad"
// clone1.address.city="vadakara"


// console.log("clone1 updated",clone1);
// console.log("user updated",user);



// higher order function 

// let arr=[44,3,21,6,4]



//  function calculate(arr,logic){
//  let rslt=[]
//     for(let i=0;i<arr.length;i++){

//            rslt.push(logic(arr[i]))
//     }
//     return rslt
//  }

//  function diameter(r){
// return 2*r
//  }

//  function area(r){
//    return Math.floor(2*Math.PI*r*r)
//  }

//  function circumference(r){
//    return Math.floor(2*Math.PI*r)
//  }

//  console.log(calculate(arr,diameter));
//  console.log(calculate(arr,area));
//  console.log(calculate(arr,circumference));



// console.log(this);


// let car= "G wagon" ?? "its null"

// console.log(car);


//call apply bind




// Question 1:
// Create an object called person with a property called name that has the value "John". Write a function called sayHello that takes one argument,
//  greeting, and prints "Hello, {greeting}! My name is {name}" where {greeting} is the argument passed to the function and {name} is the value of 
//  the name property of the person object. Use the call() function to invoke the sayHello function with the argument "Good morning".


// person ={
//     name:"John"
// }


//  function sayHello(greeting){
// console.log(`hello , ${greeting}! My name is ${this.name}`);
// }
// sayHello.call(person,"good  morning")



// Question 2:
// Define a function called getFullName that takes two arguments, firstName and lastName, and returns the full name in the format 
// "{firstName} {lastName}". Now, create an object called user with properties firstName and lastName having
//  values "John" and "Doe" respectively. Use the call() function to invoke the getFullName function with the user object
//   as the this value and store the result in a variable called fullName.


//  function getFullName(firstName,lastName){
//     return `${firstName} ${lastName}`
//  }

//  user={
//     firstName:"John",
//     lastName:"Doe"
//  }

//  let rslt=getFullName.call(user,user.firstName,user.lastName)
//  console.log(rslt);




//  Question 3:
// Create a function called calculateArea that calculates the area of a rectangle using the formula width * height. 
// Define an object called rectangle with properties width and height having values 10 and 5 respectively. 
// Use the call() function to invoke the calculateArea function with the rectangle object as the this value and 
// store the result in a variable called area.

// function calculateArea(height, width) {
//     return height * width
// }
// let rectangle = {
//     height: 10,
//     width: 5
// }

// let area = calculateArea.call(rectangle, rectangle.height, rectangle.width)
// console.log(area);


// apply


// Question:
// Write a function called findMax that finds the maximum value in an array of numbers. 
// Use the apply() method to invoke the Math.max() function with the array as arguments. Finally, return the maximum value found.

// For example, findMax([4, 8, 2, 10, 6]) should return 10.

// let array=[22,4,5,66,7,1]

// function findMax(value){


//     return Math.max.apply(null,value)


// }


// maxvalue=findMax(array)
// console.log(maxvalue);


// bind

// bind() method is used to create a new function with a specified this value and, optionally,
//  pre-defined arguments. It allows you to set the this value of a function explicitly,
//   regardless of how it is called.


function greet(message) {
    console.log(`${message}, ${this.name}!`);
  }
  
  var person = {
    name: "John"
  };
  
  var greetPerson = greet.bind(person, "Hello");
  greetPerson();