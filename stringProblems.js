// 1.Counting the number of vowels in a string:

const stringg = prompt("Enter a string:");
const vowels = "aeiou";
let count = 0;

for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
        count++;
    }
}

console.log(`The number of vowels in the string is: ${count}`);





// 2.Reversing a string:

const string = prompt("Enter a string:");
let reverseString = "";

for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
}

console.log(`The reverse of the string is: ${reverseString}`);




// 3.Checking if a string is a palindrome (reads the same forwards and backwards):

const stringgg = prompt("Enter a string:");
let reverseStringg = "";

for (let i = string.length - 1; i >= 0; i--) {
    reverseString += string[i];
}

if (string.toLowerCase() === reverseString.toLowerCase()) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}