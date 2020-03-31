function alternatingCharacters(s) {
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] === s[i]) count++
  }

  console.log(count)
  return count
}

const a = 'AAAA' // 3
const b = 'BBBBB' // 4
const c = 'ABABABAB' // 0
const d = 'BABABA' // 0
const e = 'AAABBB' // 4

const arr = [a, b, c, d, e]

for (let i = 0; i < arr.length; i++) {
  alternatingCharacters(arr[i])
}
