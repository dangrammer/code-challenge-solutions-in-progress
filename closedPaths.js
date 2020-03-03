// closed paths /////////////////////////////////////////////

function closedPaths(num) {
  const n = num.toString()
  const cPaths = ['0', '4', '6', '9']
  let count = 0
  
  for (let i = 0; i < n.length; i++) {
    if (cPaths.includes(n[i])) count += 1
    if (n[i] === '8') count += 2
  }
  return count
}

let n = 1288
closedPaths(n)
