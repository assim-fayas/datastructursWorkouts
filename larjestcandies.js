// let a=[4,3,8,5,3,1,2,3]
// let rslt=[]
// let largest=a[0];
// let extracandies=5
// for (let i = 0; i < a.length; i++) {

//     if (largest < a[i]) {
//        largest=a[i]  
// }
// }
// for(let j=0;j<a.length;j++){
//     if(a[j]+extracandies>=largest){
//         rslt.push(true)
//     }
//     else{
//         rslt.push(false)
//     }
// }

// console.log(largest);
// console.log(rslt);



function kidsWithCandies(a) {

    let rslt = []
    var largest = a[0];
    let extracandies = 5
    for (let i = 0; i < a.length; i++) {

        if (largest < a[i]) {
            largest = a[i]
        }
    }
    console.log(largest);
    for (let j = 0; j < a.length; j++) {
        if (a[j] + extracandies >= largest) {
            rslt.push(true)
        }
        else {
            rslt.push(false)
        }
    }
    return rslt
}
let a = [2, 3, 5, 1, 3]
console.log(kidsWithCandies(a));  
