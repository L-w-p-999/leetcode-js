/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function(events) {
    events.sort((a,b)=>{
        if(a[0]!==b[0]){
            return a[0]-b[0];
        }else{
            return a[1]-b[1];
        }
    });
    let n = events.length;
    let suffixMax = new Array(n+1).fill(0);
    for(let i = n - 1;i>=0;i--){
        suffixMax[i] = Math.max(suffixMax[i+1],events[i][2]);
    }
    let max = 0;
    for(let i = 0;i<events.length;i++){
        max = Math.max(max,events[i][2]);
    }
    for(let i = 0;i<events.length;i++){
        let iVal = events[i][2];
        let iEnd = events[i][1];
        let left = i+1
        let right = events.length;
        while(left<right){
            let mid = Math.floor((left+right)/2);
            if(events[mid][0]<=iEnd){
                 left = mid + 1;
            }else{
                right = mid;
            }
        }
        max = Math.max(max,iVal + suffixMax[left])
    }
     return max;
};