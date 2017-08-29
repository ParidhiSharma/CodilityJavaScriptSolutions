function solution(A) {
    if(!A || !A.length || A.length <3)
        return 0;
        
    if(A.length == 3)  {
    	return A[0]*A[1]*A[2];
    }   
        
    var res = new Array(6);
    for(var i=0; i<A.length; i++) {
        if(!res[0] || A[i] < res[0]) {
        		res[2] = res[1];
            res[1] = res[0];
            res[0] = A[i];
        } else if(!res[1] || A[i] < res[1]) {
        		res[2] = res[1];
            res[1] = A[i];
        } else if(!res[2]  || A[i] < res[2]) {
            res[2] = A[i];
        }
        
        if(!res[5] || A[i] > res[5]) {
        		res[3] = res[4];
            res[4] = res[5];
            res[5] = A[i];
        } else if(!res[4] || A[i] > res[4]) {
            res[3] = res[4];
            res[4] = A[i];
        } else if(!res[3] || A[i] > res[3]) {
            res[3] = A[i];
        }     
    }
    
    return Math.max(res[5]*res[4]*res[3] , res[5]*res[0]*res[1]);
}