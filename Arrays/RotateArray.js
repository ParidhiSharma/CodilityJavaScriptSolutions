function solution(A, K) {
    
    if(!A || !A.length || !K)
        return A;
        
    var len = A.length;
        
    if(K>len)
        K = K%len;
    
    reverseArray(A, 0, len-1);
    reverseArray(A, 0, K-1)
    reverseArray(A, K, len-1);
   
    return A;
}

var reverseArray = function(Arr, n, m) {
	var mid = Math.floor((m-n)/2);
    for(var i =n; i<= n+ mid; i++) {
    		var temp = Arr[i];
        Arr[i] = Arr[m +n-i];
        Arr[m+n-i] = temp
    }
}