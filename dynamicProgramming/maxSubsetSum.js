// function maxSubsetSum(arr) {
//   let maxSum = Math.max(arr[0], arr[1])
  

//   for (let i = 2; i < arr.length; i++) {
//     maxSum = Math.max(arr[i], maxSum, arr[i - 2] + arr[i])
//   }

//   console.log(maxSum)
//   return maxSum
// }

// const arr = [3, 7, 4, 6, 5] // 13
const arr = [2, 1, 5, 8, 4] // 11
maxSubsetSum(arr)

function maxSubsetSum(arr) {
  let maxSum
  
  for (let i = 0; i < arr.length; i++) {
    if (i < 2) maxSum = maxSum > arr[i] ? maxSum : arr[i]
    if (i > 1) maxSum = Math.max(arr[i], maxSum, arr[i - 2] + arr[i])
    
  }

  console.log(maxSum)
  return maxSum
}