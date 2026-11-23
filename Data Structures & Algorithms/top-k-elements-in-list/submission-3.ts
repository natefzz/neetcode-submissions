class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map();

        for(const num of nums){
            if(map.has(num)){
                map.set(num, map.get(num) + 1)
            } else {
                map.set(num, 1);
            }
        }

        console.log(map);

        const ans = [...map].sort((x,y) => y[1] - x[1]).slice(0,k).map((item) => item[0]);

        console.log(ans);

        return ans
    }
}
