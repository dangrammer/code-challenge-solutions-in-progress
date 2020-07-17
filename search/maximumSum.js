// arr
const a = [3, 3, 9, 9, 5]
// modulo
const m = 7
// result: 6
maximumSum(a, m)

// brute force solution
function maximumSum(a, m) {
  let r = 0
  for (let i = 0; i < a.length; i++) {
    for (let j = i; j <= a.length; j++) {
      const s = []
      for (let k = i; k < j; k++) {
        s.push(a[k])
      }
      if (s.length) {
        const n = s.reduce((a, b) => a + b) % m
        r = n > r ? n : r
      }
    }
  }
  console.log(r)
  return r
}
