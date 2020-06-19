// const arr = [3, 5, 4, 7, 6, 2] // 7 6 4 4 3 2
// const arr = [11, 2, 3, 14, 5, 2, 11, 12] // 14 11 3 2 2 2 2 2
const arr = [3, 5, 4, 7, 6, 2] // 7 6 4 4 3 2
riddle(arr)


////////// *** FOURTH DRAFT *** //////////

function riddle(arr) {
  const wMaxes = {}
  const wInver = {}
  const stack = []
  const maxima = []

  arr.push(0)

  for (let i = 0; i < arr.length; i++) {
    let idx = i

    while (stack.length && stack[stack.length - 1][0] >= arr[i]) {
      let [val,lastIdx] = stack.pop()
      wMaxes[arr[i]] = Math.max(wMaxes[arr[i]] || 0, i - lastIdx + 1)
      wMaxes[val] = Math.max(wMaxes[val] || 0, i - lastIdx)
      idx = lastIdx
    }

    stack.push([arr[i], idx])
  }
  
  delete wMaxes['0']

  for (let i in wMaxes) {
    wInver[wMaxes[i]] = Math.max(wInver[wMaxes[i]] || 0, i)
  }  

  maxima.push(wInver[arr.length - 1])                         
  
  for (let i = arr.length - 2; i > 0; i--) {
    if (!wInver[i] || wInver[i] < maxima[maxima.length - 1]) {
      maxima.push(maxima[maxima.length - 1])
    } else {
      maxima.push(wInver[i])
    } 
  }    
  
  const result = maxima.reverse()
    
  console.log(result)
  return result                 
}
   

// ////////// *** THIRD DRAFT *** //////////

// function riddle(arr) {
//   let windowSize = 1
//   const maxima = []
  
//   while (windowSize <= arr.length) {
//     const minima = []
      
//     for (let i = 0; i <= arr.length - windowSize; i++) {
//       const window = []
//       let endIdx = 0

//       while (endIdx < windowSize) {
//         window.push(arr[i + endIdx])
//         endIdx++
//       }

//       minima.push(Math.min(...window))
//     } 

//     maxima.push(Math.max(...minima))
//     windowSize++
//   }
      
//   console.log(maxima)
//   return maxima
// }


////////// *** SECOND DRAFT *** //////////

// function riddle(arr) {
//   let maxs = []
  
//   for (let i = 1; i <= arr.length; i++) {
//     let queue = []
//     let mins = []

//     for (let j = 0; j < i; j++) {
//       queue.push(arr[j])
//     }

//     let next = i

//     for (let k = 0; k <= arr.length - i; k++) {
//       mins.push(Math.min(...queue))
//       queue.shift()
//       queue.push(arr[next])
//       next++
//     }

//     maxs.push(Math.max(...mins))
//   }

//   console.log(maxs)
//   return maxs
// }


////////// *** FIRST DRAFT *** //////////

// function riddle(arr) {
//   let maxs = []
  
//   for (let i = 1; i <= arr.length; i++) {
//     let windowLength = i
//     let mins = []

//     for (let j = 0; j <= arr.length - i; j++) {
//       let startIdx = j
//       let endIdx = startIdx + windowLength
//       let min = 10 ** 9

//       for (let k = startIdx; k < endIdx; k++) {
//         min = Math.min(min, arr[k])
//       }
//       mins.push(min)
      
//     }
//     maxs.push(Math.max(...mins))
//   }

//   console.log(maxs)
//   return maxs
// }
