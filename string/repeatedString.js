// repeated string /////////////////////////////////////////////

// *FIRST DRAFT* //

// function repeatedString(s, n) {
//   let a = []

//   if (s.length === 1) {
//     s === 'a' ? n : 0
//   }
 
//   while (a.length < n) {
//     for (let i = 0; i < s.length; i++) { 
//       if (a.length < n) a.push(s[i])
//     }
//   }
//   return a.filter(l => l === 'a').length
// }

// *SECOND DRAFT* //

function repeatedString(s, n) {
  const repCount = parseInt(n / s.length)
  const remCount = n % s.length

  const aCount = (str) => {
    return str.split('').filter(l => l === 'a').length
  }

  return repCount * aCount(s) + aCount(s.slice(0, remCount))
}

let s = 'aba'
let n = 10
repeatedString(s, n)
