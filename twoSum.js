//


var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(j=0;j<nums.length;j++){
            if(nums[i]+nums[j]==target && i!=j){
              return [i,j];
            }
        }
    }
};

console.log(twoSum([1,2,3,4,5,6],4));