// const arr = [1, 1, 1, 2, 2] // 0
const arr = [2, 1, 3, 1, 2] // 4
// countInversions(arr)


////////// *** SECOND DRAFT *** //////////

function merge(arr, spanA, spanB) {
  let lenA = spanA.length
  let lenB = spanB.length
  let [i, j, k] = [0, 0, 0]
  let inversions = 0

  while (i < lenA && j < lenB) {
    if (spanA[i] <= spanB[j]) {
      arr[k] = spanA[i]
      i++
    } else {
      arr[k] = spanB[j]
      inversions += lenA - i
      j++
      k++
    } 
  }
     
  while (i < lenA) {
    arr[k] = spanA[i]
    i++ 
    k++
  }
     

  while (j < lenB) {
    arr[k] = spanB[j]
    j++
    k++
  }

  return inversions
}
   

function mergeSort(arr) {
  if (arr.length === 1) return 0
  
  const spanA = arr.slice(0, arr.length / 2)
  const spanB = arr.slice(arr.length / 2, arr.length)

  let inversions = mergeSort(spanA) + mergeSort(spanB) + merge(arr, spanA, spanB)

  return inversions
}
   

function countInversions(arr) {
  console.log(mergeSort(arr))
  return mergeSort(arr)
}


// ////////// *** FIRST DRAFT *** //////////

// function countInversions(arr) {
//   const spanA = arr.slice(0, arr.length / 2)
//   const spanB = arr.slice(arr.length / 2, arr.length)
//   let swaps = 0

//   const merge = (a, b) => {
//     const mergedArr = []
    
//     while (a.length && b.length) {
//       mergedArr.push(a[0] < b[0] ? a.shift() : b.shift())
//       swaps++
//     }
   
//     return mergedArr.concat(a).concat(b)
//   }

//   if (arr.length === 1) return arr
//   const sortedArr = merge(countInversions(spanA), countInversions(spanB))

//   console.log(swaps)
//   return swaps
//   // console.log(sortedArr)
//   // return sortedArr
// }
