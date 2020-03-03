// 2D array (hourglass sum) //////////////////////////////////

function hourglassSum(arr) {
  let sums = []
  let sum

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sum = [
        ...arr[i].slice(j, j + 3),
        arr[i + 1][j + 1],
        ...arr[i + 2].slice(j, j + 3)
      ]
      sums.push(sum.reduce((a, b) => a + b))
    }
  } 
  return Math.max(...sums)
}

arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
hourglassSum(arr)
