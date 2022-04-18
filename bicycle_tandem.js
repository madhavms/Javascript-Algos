function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    // Write your code here.
      redShirtSpeeds.sort((a,b) => a - b);
      blueShirtSpeeds.sort((a,b) => a - b);
      array_len = redShirtSpeeds.length;
      max_sum = 0;
      min_sum = 0;
      
      for (let idx = 0; idx < array_len; idx ++){
          min_sum += Math.max(redShirtSpeeds[idx],blueShirtSpeeds[idx]);
          max_sum += Math.max(redShirtSpeeds[idx],blueShirtSpeeds[array_len - idx - 1]);
      }
      
      if (fastest) return max_sum;
      else return min_sum;
  }
  
  let blueShirtSpeeds = [3, 6, 7, 2, 1];
  let fastest = true;
  let redShirtSpeeds = [5, 5, 3, 9, 2];

  console.log(tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest))
  