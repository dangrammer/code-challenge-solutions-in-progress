function luckBalance(k, contests) {
  let maxLuck = 0
  
  contests.sort((a, b) => b[0] - a[0])

  for (let i of contests) {
    if (i[1] === 0) {
      maxLuck += i[0]
    } else {
      if (k > 0) {
        maxLuck += i[0]
        k--
      } else {
        maxLuck -= i[0]
      }
    }
  }

  console.log(maxLuck)
  return maxLuck
}

const k = 3
const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0]
] // 29
luckBalance(k, contests)