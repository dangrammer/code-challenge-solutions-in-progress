function triplets(a, b, c) {
  const setA = [...new Set(a)]
  const setB = [...new Set(b)]
  const setC = [...new Set(c)]
  let count = 0

  for (let n of setB) {
    let i = 0
    let j = 0

    while (i < setA.length && setA[i] <= n) i++
    while (j < setC.length && setC[j] <= n) j++
    count += i * j
  }

  console.log(count)
  return count
}

// const a = [1, 3, 5]
// const b = [2, 3]
// const c = [1, 2, 3]
// 8
const a = [1, 4, 5]
const b = [2, 3, 3]
const c = [1, 2, 3]
// 5

triplets(a, b, c)

// output: Print an integer representing the number of distinct triplets.