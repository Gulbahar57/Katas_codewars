/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. 
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0] */

export function moveZeros(nums) {

    for(let i = nums.length - 1; i >= 0 ; i--){
     if(nums[i] === 0){
       nums.splice(i, 1);
       nums.push(0);
     }
    }
    return nums;
 }
