function stringMingling(q, p, n){
    return (p.length !== q.length) ? "Can't do it buddy" :
    
        (n === 0) ? p.charAt(n) + q.charAt(n) :
      
        p.charAt(n) + q.charAt(n) + stringMingling(q, p, n-1)
 }
 
 console.log(stringMingling("abcde", "pqrst", "abcde".length).split("").reverse().join(""))