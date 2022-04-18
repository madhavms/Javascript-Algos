function nodeDepths(root, depth = 0) {
    // Write your code here.
      if(root === null) return 0
      
      //nodeDepthsHelper(root, sum_depth, running_depth)
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1) 
      
  }
  
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  

  
  root = new BinaryTree(9)
  root.left = new BinaryTree(4)
  root.right = new BinaryTree(17)
  root.left.left = new BinaryTree(3)
  root.left.right = new BinaryTree(6)
  root.left.right.left = new BinaryTree(5)
  root.left.right.right = new BinaryTree(7)
  root.right.right = new BinaryTree(22)
  root.right.right.left = new BinaryTree(20)

  console.log(nodeDepths(root))
  
  