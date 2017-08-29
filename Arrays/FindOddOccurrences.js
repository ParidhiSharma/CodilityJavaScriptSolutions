function solution(A) {
    
    if(!A || !A.length)
        return;
        
    var res = 0;        
        
    //The XOR operator gives 0 if applied on same number    
    for(var i =0; i<A.length; i++) {
       res = res^A[i];
    }        
    
   return res;
}