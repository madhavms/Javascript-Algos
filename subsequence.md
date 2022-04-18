//Check if the second array is a subsequence of the first array.

Input:
{
  "array": [5, 1, 22, 25, 6, -1, 8, 10],
  "sequence": [1, 6, -1, 10]
}

Output:

true. Since 1,6,-1,10 occurs in the same order in the array at the 
indexes 1,4,5,7.

Logic: Use array index and sequence index to track the progression through the 
arrays. For each loop run the array index is incremented and if the element is 
equal to the sequence element at sequence index then the sequence index
is incremented.

Finally the sequence index is compared to the sequence length returning
boolean value corresponding to valid subsequence. If the sequence index equals the
sequence array length then all the elements in the sequence array are present in
the array in the same order.
