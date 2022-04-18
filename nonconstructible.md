From the list of coins provided identify the least amount that cannot be formed.

Example if the coins are [1,2,3,8] then 7 is the least amount that cannot
be formed using the coins.

Input: [1,2,3,8]
Output: 7

Logic: Iterate through the array of coins and keep the currentSum. If the current
coin is greater than the currentSum+1 then currentSum+1 is the minimun
amount that cannot be made using the coins.





