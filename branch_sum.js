// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // Write your code here.
      runningsum = 0;
      sums = [];
      branchSumsHelper(root, runningsum, sums);
      return sums;
      
  }
  
  function branchSumsHelper(node, runningsum, sums) {
      if (!node) return;
      
      const newrunningsum = runningsum + node.value;
      if (!node.left && !node.right){
          
          sums.push(newrunningsum);
          return
      }
  

      branchSumsHelper(node.left, newrunningsum, sums);
      branchSumsHelper(node.right, newrunningsum, sums);     
  }

  //Creating BST
root = new BinaryTree(9)
root.left = new BinaryTree(4)
root.right = new BinaryTree(17)
root.left.left = new BinaryTree(3)
root.left.right = new BinaryTree(6)
root.left.right.left = new BinaryTree(5)
root.left.right.right = new BinaryTree(7)
root.right.right = new BinaryTree(22)
root.right.right.left = new BinaryTree(20)

//Initialising the target
target = 21
  
console.log(branchSums(root))

/* Input BST

      9
     / \
    4   17
   / \    \
  3   6    22
     / \   /
    5  7  20

*/

  