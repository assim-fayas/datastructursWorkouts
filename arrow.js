
//arrow functions......


let d = ch => ch
console.log(d("aa"));


let b = () => "kkk"

console.log(b());


const sum = (a, b) => a + b
console.log(sum(5, 7));




const mul = (a, b) => console.log(a * b);
mul(3, 5)

//template in javaScript

let name = "anil"
let age = 23
console.log(name + " is " + age + " years old ");
console.log(`${name} is ${age} years old`);


// sort an array  in descending  order using   arrow function

let a = [4, 2, 7, 1]
a.sort((a, b) => b - a)
console.log(a);




