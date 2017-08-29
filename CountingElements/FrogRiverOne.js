function solution(N, A) {
    
    if(!A || !A.length)
        return -1;
        
    var s = new Set();
    var sum = Math.ceil((N/2)*(N+1));
    
    for(var i = 0; i<=A.length; i++) {
        if(!s.has(A[i])) {
            if(sum-A[i] == 0) {
                return i;    
            }
            s.add(A[i], 1);
            sum -= A[i];    
        }
    }
    
    return -1;
}