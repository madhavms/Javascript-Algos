function findClosestValueInBst(tree, target) {
    // Write your code here.
      return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
      if (tree === null) return closest;
      if (Math.abs(target - closest) > Math.abs(target - tree.value)){
          closest = tree.value;
      }
      if (target < tree.value){
          return findClosestValueInBstHelper(tree.left, target, closest);
      }
      
      else if (target > tree.value){
          return findClosestValueInBstHelper(tree.right, target, closest);
      }
      
      else {
          return closest;
      }
  }
  
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
    //Creating BST
    root = new BST(9)
    root.left = new BST(4)
	root.right = new BST(17)
	root.left.left = new BST(3)
	root.left.right = new BST(6)
	root.left.right.left = new BST(5)
	root.left.right.right = new BST(7)
	root.right.right = new BST(22)
    root.right.right.left = new BST(20)

    //Initialising the target
    target = 21
    
	console.log(findClosestValueInBst(root, target))
  

  