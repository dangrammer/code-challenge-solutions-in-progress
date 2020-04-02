///////////// *** FIRST DRAFT *** /////////////

// function isValid(s) {
//   const hGram = {}
//   let max = 0
//   let count = 0

//   for (let l of s) {
//     hGram[l] ? hGram[l]++ : hGram[l] = 1
//     max = Math.max(hGram[l], max)
//   }

//   for (let l in hGram) {
//     if (hGram[l] < max) count++
//     if (count > 1) {
//       console.log('NO')
//       return 'NO'
//     }
//     if (hGram[l] <= max - 2) {
//       console.log('NO')
//       return 'NO'
//     }
//   }

//   console.log(hGram, max)
//   console.log('YES')
// }


///////////// *** SECOND DRAFT *** /////////////

// function isValid(s) {
//   const letters = {}
//   const counts = {}
 
//   for (let l of s) {
//     letters[l] ? letters[l]++ : letters[l] = 1
//   }

//   for (let n in letters) {
//     counts[letters[n]] ? counts[letters[n]]++ : counts[letters[n]] = 1
//   }

//   const freqs = Object.keys(counts)
//   console.log(letters)
//   console.log(counts)

//   if (freqs.length === 2 && counts[freqs[0]] !== counts[freqs[1]]) {
//     let max = Math.max(...freqs)
//     let min = Math.min(...freqs)

//     if (max - min < 2) {
//       console.log('YES')
//       return 'YES'
//     }
//   }

//   console.log('NO')
//   return 'NO'
// }




const s = 'abcdefghhgfedecba' // YES
// const s = 'aabbcd' // NO
// const s = 'aabbccddeefghi' //NO
isValid(s)

// create histogram => { a: 2, b: 2, c: 2, d: 2, e: 3, f: 2, g: 2, h: 2 }
// if there are more than two values => return NO
// if there are two values
//  if the outlier value minus 1 does not equal other value or 0 => return NO
// return YES