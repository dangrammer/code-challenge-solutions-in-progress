function maximumToys(prices, k) {
  let bill = 0
  let i = 0

  prices.sort((a, b) => a - b)

  while (bill + prices[i] < k) {
    bill += prices[i]
    i++
  }

  return i
}

const prices = [1, 12, 5, 111, 200, 1000, 10]
const k = 50
maximumToys(prices, k)
// => 4
 