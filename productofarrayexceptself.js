var productExceptSelf = function(nums) {
    
    let multiplier = 1; 
     let result = [];
 
     for(let i =0; i<nums.length; i++){ //left multiplier
         let num = nums[i];
         result.push(multiplier);
         multiplier*=num;
     }
     multiplier=1; // resetting the muliplier
     for(let i =nums.length-1; i>=0; i--){ //right multiplier
         let num = nums[i];
         result[i]*=multiplier;
         multiplier*=num;
     }
     return result;
     
 };