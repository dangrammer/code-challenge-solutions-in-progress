// const n = 3
// const arr = [1, 2, 2] // 4
const n = 10
const arr = [2, 4, 2, 6, 1, 7, 8, 9, 2, 1] // 19
// const n = 8
// const arr = [2, 4, 3, 5, 2, 6, 4, 5] // 12
candies(n, arr)

function candies(n, arr) {
  const counts = new Array(n).fill(1)
  let result = 0

  for (let i = 1; i < n; i++) {
    if (arr[i] > arr[i - 1]) counts[i] = counts[i - 1] + 1
  }

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > arr[i + 1]) {
      if (counts[i] <= counts[i + 1]) counts[i] = counts[i + 1] + 1
    }
    result += counts[i]
  }

  result += counts[n - 1]

  return(result)
}
