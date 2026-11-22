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
            const key = strs[i].split("").sort().join();        
            if(key in obj){
                obj[key].push(strs[i])
            } else {
                obj[key] = [strs[i]]
            }
        }    

        return Object.values(obj);
    }
}
