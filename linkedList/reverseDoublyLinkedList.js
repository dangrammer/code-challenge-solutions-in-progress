// Reference:
// DoublyLinkedListNode {
//   DoublyLinkedListNode.data
//   DoublyLinkedListNode.next
//   DoublyLinkedListNode.prev
// }

function reverse(head) {
  if (head.data === null) return head
  let curNode = head
  let nextNode

  while (curNode.next) {
    nextNode = curNode.next
    curNode.next = curNode.prev
    curNode.prev = curNode.next
    curNode = nextNode
  }

  nextNode = curNode.next
  curNode.next = curNode.prev
  curNode.prev = curNode.next

  return curNode
}
