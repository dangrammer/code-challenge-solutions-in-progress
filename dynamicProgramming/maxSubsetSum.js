const arr = [3, 7, 4, 6, 5] // 13
// const arr = [2, 1, 5, 8, 4] // 11
maxSubsetSum(arr)


////////// *** THIRD DRAFT *** //////////

function maxSubsetSum(arr) {
  const sums = [arr[0], Math.max(arr[0], arr[1])]
  let maxSum = Math.max(...sums)
  
  for (let i = 2; i < arr.length; i++) {
    const max = Math.max(sums[sums.length - 2] + arr[i], arr[i])
    sums.push(Math.max(max, maxSum))
    maxSum = Math.max(maxSum, sums[sums.length - 1])
  }

  console.log(maxSum)
  return maxSum
}


////////// *** SECOND DRAFT *** //////////

// function maxSubsetSum(arr) {
//   let maxSum
  
//   for (let i = 0; i < arr.length; i++) {
//     if (i < 2) maxSum = maxSum > arr[i] ? maxSum : arr[i]
//     if (i > 1) maxSum = Math.max(arr[i], maxSum, arr[i - 2] + arr[i])
    
//   }

//   console.log(maxSum)
//   return maxSum
// }


////////// *** FIRST DRAFT *** //////////

// function maxSubsetSum(arr) {
//   let maxSum = Math.max(arr[0], arr[1])
  
//   for (let i = 2; i < arr.length; i++) {
//     maxSum = Math.max(arr[i], maxSum, arr[i - 2] + arr[i])
//   }

//   console.log(maxSum)
//   return maxSum
// }
