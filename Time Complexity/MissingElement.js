function solution(A) {
    var res =0;
    if(!A || !A.length)
        return res;

    if(!A.length)
        return 1;
        
    var len = A.length;    
        
    for(var i = len-1; i>=0; i--) {
        res += A[i];
    }    
    
    var sum = Math.ceil(((len+1)/2)*(2+(len)));
    return (sum-res);
}




