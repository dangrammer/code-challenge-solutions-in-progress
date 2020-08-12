const a = [3, 3, 9, 9, 5]
const m = 7
// result: 6
// const a = [1, 5, 9]
// const m = 5
// result: 4
maximumSum(a, m)



//////////// *** THIRD DRAFT *** ////////////

function bisect(arr, val) {
  if (!arr.length) return 0
  let i
  for (i = 0; i < arr.length; i++) {
    if (val < arr[i]) return i
  }
  return i
}

function maximumSum(a, m) {
  const sortedPreSums = []
  let preSum = 0
  let maxSum = 0

  for (let i = 0; i < a.length; i++) {
    preSum = (preSum + a[i]) % m
    maxSum = Math.max(maxSum, preSum)
    let j = bisect(a, preSum)
    if (j < sortedPreSums.length) maxSum = Math.max(maxSum, preSum - sortedPreSums[j] + m)
    sortedPreSums.splice(j + 1, 0, preSum)  
  }

  return maxSum
}



//////////// *** SECOND DRAFT *** ////////////

// function maximumSum(a, m) {
//   let sum = 0
//   let maxSum = 0
  
//   for (let i = 0; i < a.length; i++) {
//     sum += a[i]
//     sum = sum % m
//     if (sum > 0) {
//       maxSum = Math.max(maxSum, sum)
//     } else {
//       sum = 0
//     } 
//   }
//   console.log(maxSum)        
//   return maxSum
// }



// brute force solution

// function maximumSum(a, m) {
//   let r = 0
//   for (let i = 0; i < a.length; i++) {
//     for (let j = i; j <= a.length; j++) {
//       const s = []
//       for (let k = i; k < j; k++) {
//         s.push(a[k])
//       }
//       if (s.length) {
//         const n = s.reduce((a, b) => a + b) % m
//         r = n > r ? n : r
//       }
//     }
//   }
//   console.log(r)
//   return r
// }
