//////////// *** THIRD DRAFT *** ////////////

function insertNodeAtPosition(head, data, position) {
  let i = 0
  let node

  if (!head) {
    node = {data, next: null}
    return node
  }
  
  node = head

  while (node) {
    if (i === position - 1) {
      const prevNode = node
      const newNode = {data, next: prevNode.next}
      prevNode.next = newNode
      return head
   }
   node = node.next
   i++
  }

  return null
}

//////////// *** SECOND DRAFT *** ////////////

// function insertNodeAtPosition(head, data, position) {
//   let i = 0
//   let node = head

//   while (node) {
//     if (i === position - 1) {
//       const prevNode = node
//       const newNode = {data, next: prevNode.next}
//       prevNode.next = newNode
//       return head
//    }
//    node = node.next
//    i++
//   }

//   return {data, next: null}
// }

//////////// *** FIRST DRAFT *** ////////////

// function insertNodeAtPosition(head, data, position) {
//   let i = 0
//   let node = head

//   while (node) {
//     if (i === position - 1) {
//       const prevNode = node
//       const newNode = {data, next: prevNode.next}
//       prevNode.next = newNode
//       return head
//     }
//     node = node.next
//     i++
//   }
// }
