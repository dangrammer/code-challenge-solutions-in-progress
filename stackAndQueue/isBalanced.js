// const s = '{[()]}' // YES
// const s = '{[(])}' // NO
const s = '{{[[(())]]}}' // YES
isBalanced(s)


function isBalanced(s) {
  const pairs = {'{': '}', '[': ']', '(': ')'}
  const stack = []

  for (let c of s) {
    if (pairs[c]) stack.push(c)
    else if (pairs[stack.pop()] !== c) return 'NO'
  }

  return stack.length ? 'NO' : 'YES'
}
