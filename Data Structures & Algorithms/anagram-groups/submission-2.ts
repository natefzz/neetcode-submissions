class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const set = new Set<string>();

        for(let i = 0; i < strs.length; i++){
            set.add(strs[i].split("").sort().join());
        }

        let obj:{[key:string]: string[]} = {};
        for(let i = 0; i < strs.length; i++){       
            if(strs[i].split("").sort().join() in obj){
                obj[strs[i].split("").sort().join()].push(strs[i])
            } else {
                obj[strs[i].split("").sort().join()] = [strs[i]]
            }
        }    

        return Object.values(obj);
    }
}
