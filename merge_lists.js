function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
    }

var mergeTwoLists = function(list1, list2) {
    
    let nums1 = [];
    let nums2 = [];
    
    while(list1){
        nums1.push(list1.val);
        list1 = list1.next;
    }
    
    while(list2){
        nums2.push(list2.val);
        list2 = list2.next;
    }
    
    let comb_arr = [...nums1, ...nums2].sort((a,b) => a-b);
    console.log(comb_arr);
    let head;
    let prev;
    
    for(let num of comb_arr){
        const node = new ListNode(num);

        if(!head) 
            head = node;
        
        if(prev){
            prev.next = node;
        }
        
        prev = node;
    }
    
    return head || null;
       
};

let list1 = [1,2,4];
let list2 = [1,3,4];

console.log(mergeTwoLists(list1, list2));