let l1 = [2,4,3] 
let l2 = [5,6,4]
var carry=0;
var Total=0
var head = new ListNode(0);
var now = head;
var addTwoNumbers = function(l1, l2) {
    while (l1!=null &&l2!=null ){
        Total=(l1? l1:0)+(l2? l2:0) +carry
        carry = Math.floor(sum / 10);
        now.next= new ListNode(0);
        now = now.next
        l1=l1? l1:null;
        l2=l2? l2:null;
    }
    if (carry) now.next= new ListNode(carry);
    return head.next;   
};
console.log(addTwoNumbers(l1, l2))