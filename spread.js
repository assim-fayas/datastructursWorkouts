// let a = ["i", "am", "assim"]
// let b = []



// b = [...a];

// a.push("haai")






// console.log(a);
// console.log(b);



// // rest parameter...


// function rest(...args) {

//     console.log(args);
    
// }
// rest(4,5,6)

//spread

let a=[1,2,3,4,5,6]

let b=[...a] //shallow copy


b.push(0)
console.log("a=",a)
console.log("b=",b)

//merge 
c=[...a,...b]
c=JSON.parse(JSON.stringify(b))// deep copy

console.log("c",c);