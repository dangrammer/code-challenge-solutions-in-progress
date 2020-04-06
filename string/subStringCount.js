function substrCount(n, s) {
  let count = 0
  let stack = ''

  for (let i = 0; i < n; i++) {
    if (!stack || s[i] === stack[0]) {
      stack += s[i]
    } else {
      let j = 1

      while (i + j < n && j <= stack.length && s[i + j] === stack[0]) {
        j++
        count++
      }

      stack = s[i]
    }

    count += stack.length
  }
  
  return count
}

const n = 7
const s = 'abcbaba'
// const n = 4
// const s = 'aaaa'
// const n = 5
// const s = 'asasd'
// const n = 14
// const s = 'aaabaaabbbcbbb'
substrCount(n, s)
