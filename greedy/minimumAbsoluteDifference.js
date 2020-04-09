//////////////// *** FIRST DRAFT *** ////////////////

// function minimumAbsoluteDifference(arr) {
//   let minDiff

//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       minDiff ? 
//         minDiff = Math.min(Math.abs(arr[i] - arr[j]), minDiff) :
//           minDiff = Math.abs(arr[i] - arr[j])
//     }
//   }

//   console.log(minDiff)
//   return minDiff
// }


//////////////// *** SECOND DRAFT *** ////////////////

function minimumAbsoluteDifference(arr) {
  let nums = arr.sort((a, b) => a - b)
  let minDiff = Math.abs(nums[0] - nums[1])

  for (let i = 1; i < arr.length - 1; i++) {
    let diff = Math.abs(nums[i] - nums[i + 1])
    minDiff = Math.min(diff, minDiff)
  }

  console.log(minDiff)
  return minDiff
}


// const nums = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75] // 1
const nums = [1, -3, 71, 68, 17] // 3
minimumAbsoluteDifference(nums)
