
/*her we got ouput as un defined ,because when we call the function 
   at the first time its value is undefined because  this function  
    would get value only after 3 second ,so while we calling the function
    it comes to call stack and  got destroyed,, it geta value only after
    3 second. the solution of this problem is callback*/


// console.log("start");
// let getDataFromAPI = (callback) => {
//     setTimeout(() => {
//         callback("asim fayas")
//     }, 3000)

// }

// getDataFromAPI((value)=>{
// console.log(value);
// });
//     console.log("end");

/*.........................Synchronous callbacks...........................*/


/* A synchronous callback is executed during the execution
 of the high-order function that uses the callback */



/* the following  defines a filter() function that accepts an array
 of numbers and returns new array of odd number*/


//  filter=(numbers)=>{
//     let result=[]
//     for(let number of numbers){
//         if(number % 2 ===0){
//             result.push(number)
//         }
//     }
//     return result
//  }

//  let numbers=[1,2,3,4,5,6]
// console.log(filter(numbers));


//another methode ,passing an function and finding the odd number

//  const isOdd=(number)=>{
//         return number%2 !=0
//  }

//  filter=(numbers,fn)=>{
//     let a=[]
//     for(let number of numbers){
//     if(fn(number)){
//        a.push(number)
//     }

// }
// return a
//  }
//  let numbers=[4,3,2,5,67]

//  console.log(filter(numbers,isOdd));


// passing odd and even

// isOdd = (num) => {
//    return num % 2 != 0

// }

// isEven = (num) => {
//    return num % 2 == 0

// }
// filter = (numbers, fnc) => {
//    let result = []
//    for (let number of numbers) {
//       if (fnc(number)) {
//          result.push(number)
//       }

//    }
//    return result
// }

// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// console.log(filter(number, isOdd));
// console.log(filter(number, isEven));




//another example of call back


// filter = (numbers, callback) => {

//    let a = []
//    for (let number of numbers) {

//       if (callback(number)) {
//          a.push(number)
//       }
//    }

//    return a
// }

// const numbers = [3, 4, 55, 6, 8, 9, 4]

// oddNumbers =filter( numbers, (num)=>{
// return num % 2 != 0
// }
// )

// console.log(oddNumbers);



/*------------------------Asynchronous callbacks-----------------------*/

/* asynchronous callback is executed after the execution of the high-order
 function that usesthe callback.
Asynchronicity means that if JavaScript has to wait for an operation to 
complete, it will execute the rest of the code while waiting.

Note that JavaScript is a single-threaded programming language. 
It carries asynchronous operations via the callback queue
 and event loop. */



//  let downloadPic=(url,callback)=>{
//   setTimeout(()=>{
//    console.log(`downloading ${url}`);

//    callback(url)
//    },1000 )
//    }


// let url= ('http://www.javascripttutorial.net/pic.jpg');
//  downloadPic(url, (picture)=>console.log(`proccesing the ${picture}`));


/* ------------------------Handling Errors--------------------------- */


// let download = (url, success, failure) => {

//    setTimeout(() => {
//       console.log(`downloading the picture from ${url}`);
//       !url ? failure(url) : success(url);



//    }, 1000);

// }

// let url = 'http://www.javascript.com'
//      download('',
//    (url) => console.log(`processing  the picture ${url}`),
//    (url) => console.log(`The  ${url} is not valid`)
// );




/*-----------------------Nesting callback---------------------------*/

// let download = (url, callback) => {

//    setTimeout(() => {
//       console.log(`Downloading ${url}`);
//       callback(url)

//    }, 1000);


// }


// let url1 = 'https://www.javascripttutorial.net/pic1.jpg'
// let url2 = 'https://www.javascripttutorial.net/pic2.jpg'
// let url3 = 'https://www.javascripttutorial.net/pic3.jpg'

// download(url1, (url) => console.log(`the ${url} is proccessing`))
// download(url2, (url) => console.log(`the ${url} is proccessing`))
// download(url3, (url) => console.log(`the ${url} is proccessing`))



/*------------------------------Summary---------------------------*/

/*  A callback is a function passed into another function as an argument
to be executed later.

A high-order function is a function that accepts another function 
as an argument.

Callback functions can be synchronous or asynchronous. */





