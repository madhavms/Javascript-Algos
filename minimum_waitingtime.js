function minimumWaitingTime(queries) {
    // Write your code here.
      queries.sort((a,b) => a-b);
      let totalWaitingTime = 0;
      for (idx = 0; idx < queries.length; idx++){
          const duration = queries[idx];
          const queriesLeft = queries.length - (idx + 1);
          totalWaitingTime += duration * queriesLeft;
      }
    return totalWaitingTime;
  }

  
  /*
  [1,2,3,4,5,6]
  
  1
  1 + 2
  1 + 2 + 3
  1 + 2 + 3 + 4
  1 + 2 + 3 + 4 + 5
  */
  
  
  
  
  