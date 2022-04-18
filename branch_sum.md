      9
     / \
    4   17
   / \    \
  3   6    22
     / \   /
    5  7  20


The aim is to find all the branch sums of the BST. For this use recusrion to do a depth first traversal.

Start with node one which is '9' and keep a running_sum variable to track the sum at
each node travesersed in a branch.

first run:

sums = [] --> This is an array to store all the branch sums

calculate_sums(node, running_sum(0), sums){

    if node === null return // if an empty tree is provided return

    running_sum = 0; this keeps the running sum of the branch being traversed till now

    new_running_sum = running_sum (0) + node.value (9) = 9

    currently we are at node '9' before proceeding further we
    need to check whether there are any elements left in branch.
    This can be done by checking if the node has value on its left and right
    elements. If the node is a leaf(doesn't have child elements) add the 
    runningsum to the sum array.

    if(!node.left  && !node.right){  // if there are no leaves for the node

    sums.push(new_running_sum)
    return 

    }

    //recursive call to traverse the remaining nodes.
    This part of code is not hit when all of the 
    nodes reached do not have any further leaves.
    
    calculate_sums(node.left, new_running_sum, sum) 
    calculate_sums(node.right, new_running_sum, sum)
}


16 = 9 + 4 + 3
24 = 9 + 4 + 6 + 5
26 = 9 + 4 + 6 + 7
68 = 9 + 17 + 22 + 20

Ouput: [ 16, 24, 26, 68 ]

