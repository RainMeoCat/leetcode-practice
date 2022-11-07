/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let firstNode = new ListNode(0)
    let currNode = firstNode
    while (list1 !== null &&  list2 !== null) {
        if (list1.val <  list2.val) {
            currNode.next = list1;
            list1 = list1.next;
        } else {
            currNode.next = list2;
            list2 = list2.next;
        }
        currNode = currNode.next;
    }
    // 直到 l1 或 l2 一方為 null 則停止比較，並且將另外一邊剩下的節點加入result。
    if (list1 === null) {
        currNode.next = list2;
    } else if (list2 === null) {
        currNode.next = list1;
    }
    return firstNode.next;
};