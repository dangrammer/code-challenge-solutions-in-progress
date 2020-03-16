// counting pairs ////////////////////////////////////////

// *FIRST DRAFT* //

// function countPairs(numbers, k) {
//   let result = []

//   if (numbers.length < 2 || k < 0) {
//     console.log('ERROR: Invalid input')
//     return
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0) {
//       let nums = numbers
//       nums.splice(numbers.indexOf(numbers[i]), 1)
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[j] >= 0) {
//           if (numbers[i] + k === nums[j]) {
//             if (!result.includes(`${numbers[i]}, ${nums[j]}`)) {
//               result.push(`${numbers[i]}, ${nums[j]}`)
//             }
//           }
//         } 
//       }
//     }
//   }

//   return result.length
// }

// countPairs([2, 5, 5, 2], 3)

// *SECOND DRAFT* //

function findAddendSumPairs(arr, k) {  
  const set = new Set(arr)  
  const pairs = []

  for (n of set) {    
    if (set.has(n - k)) pairs.push([n, n - k])
  } 

  return pairs.length
}

// findAddendSumPairs([6, 6, 1, 5, 10, 0, -5], -5)
findAddendSumPairs([1, 2, 3, 4, 5, 6], 2)



