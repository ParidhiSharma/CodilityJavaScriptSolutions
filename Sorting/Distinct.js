function solution(A) {
    
    if(!A || !A.length)
        return 0;
        
    var s = new Set()
    
    for(var i=0; i< A.length; i++) {
        if(!s.has(A[i])) {
            s.add(A[i]);    
        }    
    }
    
    return s.size;
}