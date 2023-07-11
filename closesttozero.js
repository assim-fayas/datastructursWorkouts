


function findClosestToZero(numbers){
    let closest=Infinity;
    console.log(Infinity);
    for (let i = 0; i < numbers.length; i++) {    
    
      
            const currentNumber=numbers[i]

            if(Math.abs(currentNumber) < Math.abs(closest)){
                closest=currentNumber

            }
            else{
                if(Math.abs(currentNumber ) === Math.abs(closest) && currentNumber > closest ){
                    closest=currentNumber
                }
            }
      
    }
    return closest
}
 
numbers=[2,3,4,5,6,-2]
const closestToZero=findClosestToZero(numbers);
console.log('number closest to zero : ' ,closestToZero);
  