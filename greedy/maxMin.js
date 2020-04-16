/////////// *** FIRST DRAFT *** ///////////

// function maxMin(k, arr) {
//   const subArr = []

//   if (k < 2 || arr.length < 2) return

//   arr.sort((a, b) => a - b)

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > -1 && k > 0) {
//       subArr.push(arr[i])
//       k--
//     }
//   }
 
//   return subArr[subArr.length - 1] - subArr[0]
// }

/////////// *** SECOND DRAFT *** ///////////

function maxMin(k, arr) {
  let totalMin = 0
  
  if (k < 2 || arr.length < 2) return

  arr.sort((a, b) => a - b)
  console.log(arr)

  for (let i = 0; i < arr.length; i += k) {
    let min = arr[i]
    let max = arr[i + (k - 1)]

    if (max <= arr.length){
      if (max - min > 0) {
        totalMin = Math.min(totalMin, max - min)
      }
    }
  }
  
  console.log(totalMin)
 
  // return subArr[subArr.length - 1] - subArr[0]
}

const k = 3
const arr = [10, 100, 300, 200, 1000, 20, 30] // 20
// const k = 2
// const arr = [1, 2, 1, 2, 1] // 0
// const k = 2
// const arr = [-1, -2, 1, 2, 4, -3] // 0
maxMin(k, arr)

// params
// k: an integer, the number of elements in the array to create
// arr: an array of integers

// return
// It must return an integer that denotes the minimum possible value of unfairness.