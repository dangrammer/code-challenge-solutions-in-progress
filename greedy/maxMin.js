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
  if (k < 2 || arr.length < 2) return

  let MIN = 10 ** 9

  arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i] >= 0 ? arr[i] : null
    let max = arr[i + (k - 1)] >= 0 ? arr[i + (k - 1)] : null
    
    if (!!min && !!max) MIN = Math.min(MIN, max - min)
  }
  
  return MIN
}

const k = 3
const arr = [10, 100, 300, 200, 1000, 20, 30] // 20
// const k = 2
// const arr = [1, 2, 1, 2, 1] // 0
// const k = 3
// const arr = [-1, -2, 1, 2, 4, -3] // 3
maxMin(k, arr)
