class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        if (strs.length === 1){
            return [[strs[0]]];
        }

        const set = new Set<string>();

        for(let i = 0; i < strs.length; i++){
            set.add(strs[i].split("").sort().join());
        }

        // console.log(set);

        let obj:{[key:string]: string[]} = {};
        for(let i = 0; i < strs.length; i++){       
            if(strs[i].split("").sort().join() in obj){
                obj[strs[i].split("").sort().join()].push(strs[i])
            } else {
                obj[strs[i].split("").sort().join()] = [strs[i]]
            }
        }    
        // console.log(obj);    

        let ans = [];

        for(const value of Object.values(obj)){
            ans.push(value);
        }        

        return ans;
    }
}
