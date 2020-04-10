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
  arr.sort((a, b) => a - b)

  let minDiff = arr[1] - arr[0]
  
  for (let i = 1; i < arr.length - 1; i++) {
    let diff = arr[i + 1] - arr[i]
    minDiff = Math.min(diff, minDiff)
    console.log(minDiff, diff)
  }

  console.log(minDiff)
  return minDiff
}


const nums = [-59, -36, -13, 1, -53, -92, -2, -96, -54, 75] // 1
// const nums = [1, -3, 71, 68, 17] // 3
// const nums = [3, 1, 4, 2, 5] // 1
minimumAbsoluteDifference(nums)
