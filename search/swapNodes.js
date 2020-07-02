// const indexes = [[2, 3], [-1, -1], [-1, -1]]
// const queries = [1, 1]
// 3 1 2 
// 2 1 3
// const indexes = [[2, 3], [-1, 4], [-1, 5], [-1, -1], [-1, -1]]
// const queries = [2]
// 4 2 1 5 3
const indexes = [
  [2, 3], 
  [4, -1], 
  [5, -1], 
  [6, -1], 
  [7, 8], 
  [-1, 9], 
  [-1, -1], 
  [10, 11], 
  [-1, -1], 
  [-1, -1], 
  [-1, -1]
]
const queries = [2, 4]
// 2 9 6 4 1 3 7 5 11 8 10
// 2 6 9 4 1 3 7 5 10 8 11
// swapNodes() called at end of second draft to accomodate scope: Class cannot be hoisted


////////// *** SECOND DRAFT *** //////////

class Node {
  constructor(index, depth) {
    this.index = index
    this.depth = depth
    this.left = null
    this.right = null
  }
}

const printInOrder = (node, travArr) => {
  if (!node) return

  printInOrder(node.left, travArr)
  travArr.push(node.index)
  printInOrder(node.right, travArr)
}

const swapInOrder = (node, depth, query) => {
  if (!node) return

  swapInOrder(node.left, depth + 1, query)
  swapInOrder(node.right, depth + 1, query)
  
  if (depth % query === 0)
    [node.left, node.right] = [node.right, node.left]
}

const nextNode = (index, curNode) => {
  if (index === -1) return null

  return new Node(index, curNode.depth + 1)
}

function swapNodes(indexes, queries) {
  const resultArr = []
  const queue = []
  const root = new Node(1, 1)
  let curNode = root

  queue.push(curNode)

  for (let i = 0; i < indexes.length; i++) {  
    const [curLeft, curRight] = indexes[i]
    
    curNode = queue.shift()
    curNode.left = nextNode(curLeft, curNode)
    curNode.right = nextNode(curRight, curNode)

    if (curNode.left) queue.push(curNode.left)
    if (curNode.right) queue.push(curNode.right)
  }

  for (let i = 0; i < queries.length; i++) {
    const travArr = []

    swapInOrder(root, 1, queries[i])
    printInOrder(root, travArr)
    resultArr.push(travArr)
  }

  console.log(resultArr)
  return resultArr
}

swapNodes(indexes, queries)


////////// *** FIRST DRAFT *** //////////

// class Node {
//   constructor(data = -1) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
// }

// function buildTree(indexes) {
//   const queue = []
//   const root = new Node(1)
//   let i = 0

//   root.left = new Node()
//   root.right = new Node()

//   queue.push([root.left, root.right])

//   while (i < indexes.length) {
//     const [left, right] = indexes[i]
//     const [curLeft, curRight] = queue.shift() 

//     curLeft.data = left
//     curRight.data = right

//     if (left > -1) {
//       curLeft.left = new Node()
//       curLeft.right = new Node()
//       queue.push([curLeft.left, curLeft.right])
//     }
    

//     if (right > -1) {
//       curRight.left = new Node()
//       curRight.right = new Node()
//       queue.push([curRight.left, curRight.right])
//     }

//     i++
//   }
//   return root
// }

// // function printNodes(root) {
// //   if (root && root.data > -1) {
// //     printNodes(root.left) 
// //     console.log(root.data) 
// //     printNodes(root.right) 
// //   }
// // }

// // printNodes(buildTree(indexes))

// function inOrderTraversal(indexes) {
  
// }

// function swapNodes(indexes, queries) {
//   const result = []

//   return result
// }
