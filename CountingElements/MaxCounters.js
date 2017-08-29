function solution(N, A) {
   if(!N || !A || !A.length)
        return [];
        
   var res = new Array(N).fill(0), max=0;    
   
   for(var i =0; i< A.length; i++) {
      if(A[i] < N) {
        res[A[i]-1] += 1;
        if(max < res[A[i]-1]) {
            max = res[A[i]-1];    
        }
      } else {
         res.fill(max);        
      }      
   }
   
   return res;
}