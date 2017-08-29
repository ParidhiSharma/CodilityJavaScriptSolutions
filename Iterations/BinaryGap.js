function solution(N) {
    
    var max =0, curr =0, index=0;
    
    while(N>0) {
       if(N%2 == 0) {
            if(index)
                curr++;
       } else {
            index = 1;
            max = Math.max(curr, max);
            curr = 0;
       }
       N = Math.floor(N/2);
    }
    
    return max;
}