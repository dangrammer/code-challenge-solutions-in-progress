// const a = [3, 3, 9, 9, 5]
// const m = 7
// result: 6
const a = [1, 5, 9]
const m = 5
// result: 4
// maximumSum(a, m)

//////////// *** THIRD DRAFT *** ////////////

function maximumSum(a, m) {
  console.log('input arr:', a)
  console.log('modulo:', m)
  console.log('')
  let curSum = 0
  let maxSum = 0
  console.log('pre curSum:', curSum)
  console.log('pre maxSum:', maxSum)
  console.log('')

  for (let i = 0; i < a.length; i++) {
    console.log('loop', i + 1)
    console.log('curEl:', a[i])
    curSum = curSum + a[i] || 0
    console.log('new curSum:', curSum)
    maxSum = Math.max(curSum, maxSum)
    console.log('new maxSum:', maxSum)
    console.log('')
  }

  console.log('result:', maxSum % m)
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