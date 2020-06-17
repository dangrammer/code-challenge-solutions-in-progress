const arr = [3, 5, 4, 7, 6, 2] // 7 6 4 4 3 2
riddle(arr)


////////// *** SECOND DRAFT *** //////////

function riddle(arr) {
  let maxs = []
  
  for (let i = 1; i <= arr.length; i++) {
    let queue = []
    let mins = []

    for (let j = 0; j < i; j++) {
      queue.push(arr[j])
    }

    let next = i

    for (let k = 0; k <= arr.length - i; k++) {
      mins.push(Math.min(...queue))
      queue.shift()
      queue.push(arr[next])
      next++
    }

    maxs.push(Math.max(...mins))
  }

  console.log(maxs)
  return maxs
}


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
