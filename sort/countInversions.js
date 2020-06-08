// const arr = [1, 1, 1, 2, 2] // 0
const arr = [2, 1, 3, 1, 2] // 4
countInversions(arr)

////////// *** THIRD DRAFT *** //////////

function countInversions(arr) { 
  const len = arr.length
  const tempArr = new Array(len).fill(0) 

  console.log(mergeSort(arr, tempArr, 0, len - 1))
  return mergeSort(arr, tempArr, 0, len - 1) 
}
    
function mergeSort(arr, tempArr, beginIdx, endIdx) {
  let inversions = 0

  if (beginIdx < endIdx) {
    const mid = Math.floor((beginIdx + endIdx) / 2)

    inversions += mergeSort(arr, tempArr, beginIdx, mid) 
    inversions += mergeSort(arr, tempArr, mid + 1, endIdx) 
    inversions += merge(arr, tempArr, beginIdx, mid, endIdx) 
  } 
 
  return inversions 
} 
  
function merge(arr, tempArr, beginIdx, mid, endIdx) {
  let i = beginIdx     
  let j = mid + 1      
  let k = beginIdx    
  let inversions = 0
  
  while (i <= mid && j <= endIdx) {
    if (arr[i] <= arr[j]) {
      tempArr[k] = arr[i] 
      k++
      i++
    } else {
      tempArr[k] = arr[j] 
      inversions += (mid - i) + 1
      k++
      j++
    }    
  }
  
  while (i <= mid) {
    tempArr[k] = arr[i] 
    k++
    i++
  } 
       
  while (j <= endIdx) {
    tempArr[k] = arr[j] 
    k++
    j++
  } 
       
  for (let i = beginIdx; i < endIdx + 1; i++) {
    arr[i] = tempArr[i]
  }
          
  return inversions 
} 
    

////////// *** SECOND DRAFT *** //////////

// function merge(arr, spanA, spanB) {
//   let lenA = spanA.length
//   let lenB = spanB.length
//   let [i, j, k] = [0, 0, 0]
//   let inversions = 0

//   while (i < lenA && j < lenB) {
//     if (spanA[i] <= spanB[j]) {
//       arr[k] = spanA[i]
//       i++
//     } else {
//       arr[k] = spanB[j]
//       inversions += lenA - i
//       j++
//       k++
//     } 
//   }
     
//   while (i < lenA) {
//     arr[k] = spanA[i]
//     i++ 
//     k++
//   }
     

//   while (j < lenB) {
//     arr[k] = spanB[j]
//     j++
//     k++
//   }

//   return inversions
// }
   

// function mergeSort(arr) {
//   if (arr.length === 1) return 0
  
//   const mid = Math.floor(arr.length / 2)
//   const spanA = arr.slice(0, mid)
//   const spanB = arr.slice(mid, arr.length)

//   let inversions = mergeSort(spanA) + mergeSort(spanB) + merge(arr, spanA, spanB)
//   return inversions
// }
   

// function countInversions(arr) {
//   return mergeSort(arr)
// }


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



// function findMinAndRemoveSorted(arr) {
//   return arr.shift()
// }

// function merge(arr1, arr2) {
//   let mergedArr = []
//   while (arr1.length > 0 && arr2.length > 0) {
//     if (arr1[0] < arr2[0]) {
//       mergedArr.push(findMinAndRemoveSorted(arr1))
//     } else {
//       mergedArr.push(findMinAndRemoveSorted(arr2))
//     }
//   }
//   return mergedArr.concat(arr1).concat(arr2)
// }
  
// function mergeSort(arr) {
//   let midPoint = arr.length / 2
//   let spanA = arr.slice(0, midPoint)
//   let spanB = arr.slice(midPoint, arr.length)
//   let sortedArr

//   if (arr.length === 1) {
//     return arr
//   } else {
//     sortedArr = merge(mergeSort(spanA), mergeSort(spanB))
//   }
//   return sortedArr
// }

// function countInversions(arr) {
//   console.log(mergeSort(arr))
// }
