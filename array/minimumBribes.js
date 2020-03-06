// array: minimum bribes /////////////////////////////////

function minimumBribes(q) {
  let swaps = 0

  for (let i = 0; i < q.length; i++) {
    let bribes = q[i] - (i + 1)
    let spot = q[i] - 2 > 0 ? q[i] - 2 : 0
    
    if (bribes > 2) {
      console.log('Too chaotic')
      return
    }

    for (let j = spot; j < i; j++) {
      if (q[j] > q[i]) swaps++
    }
  }

  console.log(swaps)
}

// let q = [2, 1, 5, 3, 4]
// let q = [1, 2, 5, 3, 7, 8, 6, 4]
// let q = [5, 1, 2, 3, 7, 8, 6, 4]
let q = [2, 5, 1, 3, 4]
minimumBribes(q)