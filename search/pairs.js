function pairs(k, arr) {
  const hash = {}
  let total = 0

  for (let n of arr) {
    hash[n] ? hash[n]++ : hash[n] = 1
  }

  for (let i = 0; i < arr.length; i++) {
    let val = Math.abs(arr[i] + k)
    if (hash[val]) total++
  }

  return total
}

const k = 2  
const arr = [1, 5, 3, 4, 2] // 3
pairs(k, arr)
