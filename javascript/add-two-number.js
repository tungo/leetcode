/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const addTwoNumbers = function(l1, l2) {
  const result = new ListNode(0);
  const helper = result;
  let sum = 0;

  while (l1 !== null || l2 !== null) {
      sum = Math.floor(sum / 10);

      if (l1 !== null) {
          sum += l1.val;
          l1 = l1.next;
      }

      if (l2 !== null) {
          sum += l2.val;
          l2 = l2.next;
      }

      helper.next = new ListNode(sum % 10);
      helper = helper.next;
  }

  if (Math.floor(sum / 10) === 1) {
      helper.next = new ListNode(1);
  }

  return result.next;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

let result = addTwoNumbers(l1, l2);
while (result !== null) {
  console.log(result.val);
  result = result.next;
}
