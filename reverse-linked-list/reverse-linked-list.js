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

//     variable for the next round of "head"
    let next = null
//     variable for the actual reversed value
    let reversed = null
    
    while (head !== null) {
//         next is storing the next loop round
        next = head.next
//         head is now [1 => null] for the first loop (then [2 => 1 => null])
        head.next = reversed
//         the head is stored in reversed
        reversed = head
//         head is now assigned from the next var
        head = next
    }
    
    return reversed
    
};