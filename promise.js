// getUser=()=>{
//     return[
//         {username:"asim",email:"asim1fayas@gmail.com"},
//         {username:"fayas",email:"fayas@gmail.com"}
//     ]
// }


// finduser=(username)=>{
// const users=getUser();
// const user=users.find((user)=>user.username===username);
// return user;

// }

// console.log(finduser("fayas"));







/*===============First, define an array users and
 initialize its value with an empty array.

Second, assign an array of the users to the users 
variable inside the callback of the setTimeout() 
function.

Third, return the users array -----------------*/





/* the output is undefined,Because the getUsers() 
returns an empty array, the users array is empty 
(line A). When calling the find() method on the 
users array, the method returns undefined (line B)

The challenge is how to access the users returned
 from the getUsers() function after one second. One 
 classical approach is to use the callback. */


// getUser=()=>{
//     let users=[]
//     setTimeout(() => {
//        users=[  { username: 'john', email: 'john@test.com' },
//        { username: 'jane', email: 'jane@test.com' }]},1000);

//     return users;
// }

// findUser=(user)=>{

//     const users=getUser();
//     const name=users.find((nam)=>{

//        return nam.user===user

//     })


//     return name

// }

// console.log(findUser("john"));


/*Using callbacks to deal with an 
asynchronous operation*/


// getuser=(callback)=>{

//     setTimeout(() => {


//         callback([{username:'john',email:'john@test,com'},
//         {username:'jane',email:'jane@test,com'}])

//     }, 1000);

// }

// finduser=(username,callback)=>{

//     getuser((users)=>{

//         const user=users.find((user)=>user.username===username)

//         callback(user);
//     });
// }

// finduser('john',console.log);


/*n this example, the getUsers() function accepts
 a callback function as an argument and invokes it
  with the users array inside the setTimeout() 
  function. Also, the findUser() function accepts
   a callback function that processes the matched 
   user.

The callback approach works very well. However, 
it makes the code more difficult to follow. Also, 
it adds complexity to the functions with callback 
arguments.

If the number of functions grows, you may end up
 with the callback hell problem. To resolve this,
  JavaScript comes up with the concept of promises.*/



/*===================Promise =======================*/

// getuser=()=>{
// return new Promise((resolve,reject)=>{


//     setTimeout(() => {
//         resolve([
//         { username: 'john', email: 'john@test.com' },
//         { username: 'jane', email: 'jane@test.com' }
//         ])

//     },1000 );


// });

// }





// const promise=getUser();
// promise.then








//2)
// const mypromise = new Promise((resolve, reject) => {
//     const randomenumber = Math.random();
//     if (randomenumber > 0.5) {
//         resolve(`randome Number : ${randomenumber}`)
//     }
//     else {
//         reject(`randome Number: ${randomenumber}`)
//     }

// })

// mypromise
//     .then((result) => {
//         console.log(`Success : ${result}`);
//     })

//     .catch((error) => {
//         console.log(`error : ${error}`);
//     })



// /




// async function divide(a, b) {
//     try {
//         if (b == 0) {
//             throw new Error("oops, cannote divide by zero")
//         }

//         let rslt = await a / b;
//         return rslt;
//     }
//     catch (error) {
//         console.error("Error in divide", error);
//     }
// }
// function sqrt(a) {
//     try {
//         if (a <= 0) {
//             throw new Error("the value is less than zero")
//         }

//         let result = Math.sqrt(a)
//         return result;
//     }
//     catch (error) {
//         console.error("Error in divide", error);
//     }
// }
// divide(100, 5)
//     .then((rslt) => sqrt(rslt))
//     .then((rslt) => console.log("square root is ", rslt))
//     .catch(error => console.error("error in chain", error))




//promis alll



//  function getname(a,b){
//     return new Promise((resolve,reject)=> {
//         let sum=a+b;
//         setTimeout(() => {
//             resolve(sum)
//         }, 3000);
//     })
   
// }
//  function getlastname(sum){

//     return new Promise((resolve,reject)=> {
//        let rslt= sum+5
//         setTimeout(() => {
//             resolve()
//         }, 2000);
//     })
   
// }


// Promise.all([getname(2,5),getlastname()]).then((add)=>{
//         console.log(add);
// })




function sum(a,b){
    return new Promise((resolve,reject)=>{
        if(a==0){
            reject("the number is 0")
        }else{
            resolve(a+b)
        }
    })
}
sum(0,2).then((rslt)=>{
    console.log(rslt);
})
.catch((error)=>{
    console.log(error);
});

function sub(a,b) {

    return new Promise((resolve,reject)=>{
    
        setTimeout(() => {
         resolve(a+b)
       },2000)

       if (!a || !b ){
        reject("error occured")
       }

    })
   
}
    
sub(4,4) 
.then((rslt)=>{
    console.log(rslt);
})
.catch((error)=>{
    console.log(error);
})
