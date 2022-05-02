//Remove duplicate elements from linked list which is sorted.
// Linkedlist = 1 -> 1 -> 3 -> 4 -> 4 -> 4 -> 5 -> 6 -> 6

class Linkedlist{
    constructor(){
    this.head = head;
    this.next = null;
    }
}

class Node{
    constructor(value,next){
    this.value = value;
    this.next = next;
    }
}

let vals = [1,3,4,4,4,5,6,6];
let head = 1;

//create linkedlist with head element
function createLinkedList(head){
    let linked_list = new Linkedlist(head);
    return linked_list;
}

//Insert nodes into linked list
function insertNodes(vals, linked_list){

    let currentNode = linked_list;
    let nextDistinctNode = linked_list.next;

    vals.map(val => {
        nextDistinctNode = new Node(val);
        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    });

    return linked_list;
}

let linked_list = createLinkedList(head);
linked_list = insertNodes(vals,linked_list);


console.log('\nLINKED LIST BEFORE DUPLICATE REMOVAL');
str = JSON.stringify(linked_list);
str = JSON.stringify(linked_list, null, 2); // (Optional) beautiful indented output.
console.log(str); 

let rm_list = removeDuplicatesFromLinkedList(linked_list);

console.log('\nLINKED LIST AFTER DUPLICATE REMOVAL');
str = JSON.stringify(rm_list);
str = JSON.stringify(rm_list, null, 2); // (Optional) beautiful indented output.
console.log(str);

function removeDuplicatesFromLinkedList(linkedList) {
    currentNode = linkedList;
    while(currentNode != null){
        nextDistinctNode = currentNode.next;
        while(nextDistinctNode != null && (currentNode.value || currentNode.head) == nextDistinctNode.value){
            nextDistinctNode = nextDistinctNode.next;
        }
        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    }
    return linkedList;
  }


