/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let arr =[]
   temp = head;
   while(temp){
    arr.push(temp.val)
    temp=temp.next
   }
   arr = arr.reverse()
   temp = head
   i=0;
   while(temp){
    temp.val = arr[i]
    temp=temp.next;
    i++
   }
   
return head
};