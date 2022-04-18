 /*
  While taking class photos kids in blue and red shirts should be in seperate rows.
  Taller kids should strictly be behind in the second row.
  Check if this arragement is possible and return true or false accordingly.
  */

function classPhotos(redShirtHeights, blueShirtHeights) {
    // Write your code here.
      redShirtHeights.sort((a,b) => a - b);
      blueShirtHeights.sort((a,b) => a - b);
      len = redShirtHeights.length;
      red_count = 0;
      blue_count = 0;
      console.log(redShirtHeights);
      console.log(blueShirtHeights);


      for(let idx = 0; idx < len; idx++){
          if (redShirtHeights[idx] > blueShirtHeights[idx]) red_count++;
          else if (redShirtHeights[idx] < blueShirtHeights[idx]) blue_count++;
      }
      console.log(red_count)
      if(red_count == len || blue_count == len) 
          
      {
          return true
      }
      
      
    return false;
  }

  let blueShirtHeights = [5, 8, 1, 3, 4, 9];
  let redShirtHeights = [6, 9, 2, 4, 5, 1];

  console.log(classPhotos(redShirtHeights, blueShirtHeights))