// sock merchant (find all pairs) ////////////////////////////////////////

function sockMerchant(n, ar) {
  let likeSocks = {}
  let pairs = 0
  
  for (let i = 0; i < n; i++) {
    likeSocks[ar[i]] ? likeSocks[ar[i]] += 1 : likeSocks[ar[i]] = 1
  }
  
  for (let sock in likeSocks) {
    if (likeSocks[sock] % 2 === 0) {
      pairs += likeSocks[sock] / 2
    } else {
      pairs += (likeSocks[sock] - 1) / 2 
    }
  }
  // console.log(pairs)
  return pairs
}

let n = 9
let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
sockMerchant(n, ar)
