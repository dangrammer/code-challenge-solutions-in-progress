// starter code of code challenge builds doubly linked list

////////// *** THIRD DRAFT *** //////////

function sortedInsert(head, data) {
  const newNode = new DoublyLinkedListNode(data, null, null)
  
  if (!head) return newNode

  if (head.data >= data) {
    newNode.next = head
    head.prev = newNode
    return newNode
  } 

  if (head.data < data) {
    let curNode = head
    let prevNode

    while (curNode && curNode.data < data) {
      prevNode = curNode
      curNode = curNode.next
    }

    if (!curNode) {
      prevNode.next = newNode
      newNode.prev = prevNode
    } else {
      prevNode.next = newNode
      curNode.prev = newNode
      newNode.prev = prevNode
      newNode.next = curNode
    }

    return head
  }
}



////////// *** SECOND DRAFT *** //////////

// function sortedInsert(head, data) {
//   const newNode = new DoublyLinkedListNode(data, null, null)
//   let curNode = head
//   let prevNode

//   if (!head) {
//     return newNode
//   } else if (data < head.data) {
//     newNode.next = head
//     head.prev = newNode

//     return newNode
//   } else {
//     while (curNode && curNode.data < data) {
//       prevNode = curNode
//       curNode = curNode.next
//     }

//     if (!curNode) {
//       prevNode.next = newNode
//       newNode.prev = prevNode
//     } else {
//       prevNode.next = newNode
//       curNode.prev = newNode
//       newNode.prev = prevNode
//       newNode.next = curNode
//     }

//     return head
//   }
// }



////////// *** FIRST DRAFT *** //////////

// function sortedInsert(head, data) {
//   const newNode = new DoublyLinkedListNode(data, null, null)
//   if (!head) return newNode
//   let curNode = head

//   while (curNode.next) {
//     if (curNode.next.data > data) break
//     else curNode = curNode.next
//   }

//   if (curNode.data < data) {
//     newNode.next = curNode.next
//     curNode.next = newNode
//     newNode.prev = curNode
//   }

//   if (curNode.data > data) {
//     newNode.prev = curNode.prev || null
//     curNode.prev = newNode
//     newNode.next = curNode
//   }
  
//   return newNode.prev ? head : newNode
// }