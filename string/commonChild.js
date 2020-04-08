//////////// *** FIRST DRAFT *** ////////////

// function commonChild(s1, s2) {
//   if (
//     s1.length !== s2.length ||
//     s1.length < 1 || 
//     s1.length > 5000 
//     ) {
//     console.log('INVALID INPUT')  
//     return
//   }

//   let stack = []

//   for (let i = 0; i < s2.length; i++) {
//     if (s1.includes(s2[i])) {
//       if (s2[i] !== stack[stack.length - 1]) stack.push(s2[i])
//     }
//   }

//   console.log(stack)
//   return stack.length
// }


//////////// *** SECOND DRAFT *** ////////////

// function commonChild(s1, s2) {
//   if (
//     s1.length !== s2.length ||
//     s1.length < 1 || 
//     s1.length > 5000 
//     ) {
//     console.log('INVALID INPUT')  
//     return
//   }

//   const sMap = {}
//   let child = []

//   for (let l of s1) {
//     sMap[l] ? sMap[l]++ : sMap[l] = 1
//   }
  
//   console.log(sMap)

//   for (let l of s2) {
//    if (sMap[l]) {
//      child.push(l)
//      sMap[l]--
//    }
//   } 

//   console.log(s1)
//   console.log(s2)
//   console.log(sMap)
//   console.log(child)
// }


//////////// *** THIRD DRAFT *** ////////////

function commonChild(s1, s2) {
  const matrix = []
  const len = s1.length

  if (s2.length !== len) return

  for (let i = 0; i < len; i++) {
    matrix.push(new Array(len).fill(0))
    if (s1[i] === s2[0] || s1[0] === s2[0]) matrix[i][0] = 1
    if (s2[i] === s1[0] || s1[0] === s2[0]) matrix[0][i] = 1
  }

  for (let i = 1; i < len; i++) {
    for (let j = 1; j < len; j++) {
      if (s1[i] === s2[j]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1
      } else {
        matrix[i][j] = Math.max(
          matrix[i - 1][j - 1], 
          matrix[i][j - 1], 
          matrix[i - 1][j]
        )
      }
    }
  }

  return matrix[len - 1][len - 1]
}


// const s1 = 'HARRY'
// const s2 = 'SALLY'
// const s1 = 'AA'
// const s2 = 'BB'
const s1 = 'SHINCHAN'
const s2 = 'NOHARAAA'
// const s1 = 'OUDFRMYMAW'
// const s2 = 'AWHYFCCMQX'
commonChild(s1, s2)