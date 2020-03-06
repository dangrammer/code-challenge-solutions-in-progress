// array manipualtion //////////////////////////////////////////////

//////// *** FIRST DRAFT *** ////////

// function arrayManipulation(n, queries) {
//   const arr = Array(n).fill(0)

//   for (let a of queries) {
//     for (let i = a[0] - 1; i < a[1]; i++) {
//       arr[i] += a[2]
//     }
//   }

//   return Math.max(...arr)
// }

//////// *** SECOND DRAFT *** ////////

  function arrayManipulation(n, queries) {
    const arr = new Array(n).fill(0)
    let max = 0

    for (let i = 0; i < queries.length; i++) {
      const [a, b, k] = queries[i]
      arr[a - 1] += k
      if (b < arr.length) {
        arr[b] -= k
      }
    }

    for (let i = 1; i < n; i++) {
      arr[i] += arr[i - 1]
    }

    for (let i = 0; i < arr.length; i++) {
      max = Math.max(max, arr[i])
    }
    
    return max
  }

// let n = 5
// queries = [
//   [1, 2, 100], 
//   [2, 5, 100], 
//   [3, 4, 100]
// ]

let n = 10
queries = [
  [2, 6, 8],
  [3, 5, 7],
  [1, 8, 1],
  [5, 9, 15]
]

arrayManipulation(n, queries)