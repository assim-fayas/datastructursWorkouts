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