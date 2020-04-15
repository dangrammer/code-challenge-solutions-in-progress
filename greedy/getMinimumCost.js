function getMinimumCost(k, c) {
  let purchaser = 0
  let prevPurchases = 0
  let minCost = 0

  c.sort((a, b) => a - b)

  if (k >= c.length) return c.reduce((t, n) => t + n)
  
  for (let i = c.length - 1; i >= 0; i--) {
    if (purchaser === k) {
      purchaser = 0
      prevPurchases++
    }
    minCost += (prevPurchases + 1) * c[i]
    purchaser++
  }

  console.log(minCost)
  return minCost
}

// const k = 3
// const c = [1, 3, 5, 7, 9] // 29
const k = 2
const c = [2, 5, 6] // 15
getMinimumCost(k, c)