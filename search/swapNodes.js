// const indexes = [[2, 3], [-1, -1], [-1 -1]]
const indexes = [[2, 3], [-1, 4], [6, -1], [7, 5]]
const queries = [1, 1]
// swapNodes(indexes, queries)

class Node {
  constructor(data = -1) {
    this.data = data
    this.left = null
    this.right = null
  }
}

function buildTree(indexes) {
  const queue = []
  const root = new Node(1)
  let i = 0

  root.left = new Node()
  root.right = new Node()

  queue.push([root.left, root.right])

  while (i < indexes.length) {
    const [left, right] = indexes[i]
    const [curLeft, curRight] = queue.shift() 

    curLeft.data = left
    curRight.data = right

    if (left > -1) {
      curLeft.left = new Node()
      curLeft.right = new Node()
      queue.push([curLeft.left, curLeft.right])
    }
    

    if (right > -1) {
      curRight.left = new Node()
      curRight.right = new Node()
      queue.push([curRight.left, curRight.right])
    }

    i++
  }
  return root
}

// function printNodes(root) {
//   if (root && root.data > -1) {
//     printNodes(root.left) 
//     console.log(root.data) 
//     printNodes(root.right) 
//   }
// }

// printNodes(buildTree(indexes))

function inOrderTraversal(indexes) {
  
}

function swapNodes(indexes, queries) {
  const result = []

  return result
}
