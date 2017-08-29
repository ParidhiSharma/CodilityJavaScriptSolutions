function solution(A) {
    if(!A)
        return;
        
    if(!A.length)
        return 1;    
        
    var B = new Array(A.length); 
    B.fill(0);
        
    for(var i=0; i<A.length ;i++) {
        if(A[i] > 0 && A[i] <= B.length)
            B[A[i]-1] = 1;    
    }
    
    for(var j=0; j<B.length ;j++) {
        if(B[j] == 0)
            return j+1;
    }  
    
    return (B.length + 1);
}