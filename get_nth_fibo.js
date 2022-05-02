//0 1 1 2 3 5 8

function getNthFib(n) {
    // Write your code here
    if(n==1) return 0;
    else if (n==2) return 1;
    return getNthFib(n-1) + getNthFib(n-2);
    
  }

function getNthFibMemo(n, memoize={1:0, 2:1}) {
    // Write your code here
      if(n in memoize)return memoize[n];
      
      else {
          memoize[n] = getNthFibMemo(n-1, memoize) + getNthFibMemo(n-2, memoize);
          return memoize[n];
      }
      
  }

let nthFibo = 6;


vcc
console.log(`Output of fib: ${getNthFibMemo(nthFibo)}`);  // <---- measured code goes between startTime and endTime  
let endTime = performance.now();
console.log(`\nTime take by dynamic program: ${endTime - startTime}\n`);



let startTime2 = performance.now();
console.log(`Output of fib: ${getNthFib(nthFibo)}`);  // <---- measured code goes between startTime and endTime
let endTime2 = performance.now();
console.log(`\nTime take by recursive program: ${endTime2 - startTime2}\n`);





  
