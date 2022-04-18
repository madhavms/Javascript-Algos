function nonConstructibleChange(coins) {
    // Write your code here.
      coins.sort((a,b) => a-b);
      
      let currentChangeCreated = 0;
      coins.forEach((coin) => {
        if (coin > currentChangeCreated + 1) 
        {
            return currentChangeCreated + 1;
        }
        
        currentChangeCreated += coin;
      } )

      return currentChangeCreated + 1;
  }

  let coins = [5, 7, 1, 1, 2, 3, 22];
  console.log(nonConstructibleChange(coins));