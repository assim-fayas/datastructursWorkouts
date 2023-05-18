// function defaultFunction(a, b=2) {

// console.log(a+b);

// }

// defaultFunction(3,)


// recursive function

function countDown(num){

    console.log(num);

    let newNum=num-1

    if(newNum>0){

        countDown(newNum)
    }


}
countDown(5)