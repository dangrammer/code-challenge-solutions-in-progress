// const arr = [3, 5, 4, 7, 6, 2] // 7 6 4 4 3 2
riddle(arr)

////////// *** FIRST DRAFT *** //////////

function riddle(arr) {
  let maxs = []
  
  for (let i = 1; i <= arr.length; i++) {
    let windowLength = i
    let mins = []

    for (let j = 0; j <= arr.length - i; j++) {
      let startIdx = j
      let endIdx = startIdx + windowLength
      let min = 10 ** 9

      for (let k = startIdx; k < endIdx; k++) {
        min = Math.min(min, arr[k])
      }
      mins.push(min)
      
    }
    maxs.push(Math.max(...mins))
  }

  console.log(maxs)
  return maxs
}
