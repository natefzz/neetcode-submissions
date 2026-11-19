class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // twoSum(nums: number[], target: number): number[] {
    //     for(let i = 0; i < nums.length; i++){
    //         for(let j = i+1; j < nums.length - 1; j++){
    //             if(nums[i] + nums[j] === target){
    //                 return [i, j];
    //             }
    //         }
    //     }
    // }
    
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number, number>();
        
        for (let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            let diffIndex = map.get(diff);

            if(map.has(diff) && diffIndex !== i){
                return [i, diffIndex];
            }

            map.set(nums[i], i);

        }
    }
}

// [3,4,5,6] 10