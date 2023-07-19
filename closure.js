

function closure(){

    let a=4;
    function inner() {

       let b=4;
       let sum=a+b;
        return sum;
    }
    console.log(inner()); 
}
// console.log(closure()); 
closure()

// function a(){
//     let a=10
//     function b(){

//     }
// }


// function outer(){
//     let a=5;
//     function inner(){
//         console.log(a);
//     }
//     return inner
// }
// let reslt=outer()
// reslt();
