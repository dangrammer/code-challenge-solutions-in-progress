const s = 'abcdefghhgfedecba' // YES
// const s = 'aabbcd' // NO
// const s = 'aabbccddeefghi' // NO
// const s = 'aabbcc' // YES
// const s = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd' // YES
// const s = 'aaaaabc' // NO
// const s = 'aabbcccdd' // YES
// const s = 'aaabcccddd' // YES
isValid(s)

///////////// *** SEVENTH DRAFT - it works! *** ///////////////

function isValid(s) {
  const cMap = {}
  
  for (let c of s) {
    cMap[c] ? cMap[c]++ : cMap[c] = 1
  }

  const freqs = new Set(Object.values(cMap))

  if (freqs.size === 1) return 'YES'

  if (freqs.size === 2) {
    const max = Math.max(...freqs)
    const min = Math.min(...freqs)
    let maxCt = 0
    let minCt = 0

    for (let c in cMap) {
      if (cMap[c] === max) maxCt++
      if (cMap[c] === min) minCt++
    }

    if (
      (minCt === 1 && min === 1) || 
      (maxCt === 1 && max === min + 1)
    ) return 'YES'
  }

  return 'NO'
}


///////////// *** SIXTH DRAFT *** ///////////////

// function isValid(s) {
//   const letters = {}
//   let freqs
//   let max
//   let min

//   for (let l of s) {
//     letters[l] ? letters[l]++ : letters[l] = 1
//   }

//   freqs = [...new Set(Object.values(letters))]

//   if (freqs.length === 1) {
//     console.log('YES')
//     return 'YES'
//   }

//   if (freqs.length < 3) {
//     if (freqs[0] > freqs[1]) {
//       max = freqs[0]
//       min = freqs[1]
//     } else if (freqs[1] > freqs[0]) {
//       max = freqs[1]
//       min = freqs[0]
//     }
  
//     let maxCount = 0
//     let minCount = 0

//     for (let l in letters) {
//       if (letters[l] === max) maxCount++
//       if (letters[l] === min) minCount++
//     }

//     console.log('maxCount', maxCount, 'minCount', minCount)

//     if (maxCount === 1 || minCount === 1) {
//       if (max === 1 || min === 1 || Math.abs(max - min) === 1) {
//         console.log('YES - one deletion available')
//         return 'YES'
//       }
//     }
//   }
 
//   console.log(letters)
//   console.log(freqs)

//   console.log('NO - too many characters')
//   return 'NO'
// }


///////////// *** FIFTH DRAFT *** /////////////

// function isValid(s) {
//   const letters = {}
//   let freqs
//   let max
//   let min

//   for (let l of s) {
//     letters[l] ? letters[l]++ : letters[l] = 1
//   }

//   freqs = [...new Set(Object.values(letters))]

//   console.log(letters)
//   console.log(freqs)

//   if (freqs.length === 1) {
//     console.log('YES')
//     return 'YES'
//   }

//   if (freqs.length < 3) {
//     if (freqs[0] > freqs[1]) {
//       max = freqs[0]
//       min = freqs[1]
//     } else if (freqs[1] > freqs[0]) {
//       max = freqs[1]
//       min = freqs[0]
//     }
  
//     let maxCount = 0
//     let minCount = 0

//     for (let l in letters) {
//       if (letters[l] === max) maxCount++
//       if (letters[l] === min) minCount++
//     }

//     console.log('maxCount', maxCount, 'minCount', minCount)

//     const static = maxCount > minCount ? max : min
//     const outlier = maxCount < minCount ? max : min

//     console.log('static =', static, 'outlier =', outlier)

//     if (maxCount !== 1 && minCount !== 1) {
//       console.log('NO - maxcount nor mincount !== 1')
//       return 'NO'
//     }

//     if (outlier === 1 || Math.abs(outlier - 1) === static) {
//       console.log('YES - outlier')
//       return 'YES'
//     }
    

//     // if (maxCount === 1 || minCount === 1) {
//     //   if (outlier === 1 || Math.abs(outlier - 1) === static) {
//     //     console.log('YES - outlier')
//     //     return 'YES'
//     //   }
//     //   if (max === 1 || min === 1 || Math.abs(max - min) === 1) {
//     //     console.log('YES - one deletion available')
//     //     return 'YES'
//     //   }
//     // }
//   }

//   console.log('NO - too many characters')
//   return 'NO'
// }


///////////// *** FOURTH DRAFT *** /////////////

// function isValid(s) {
//   const letters = {}
//   let freqs
//   let diff
//   let unMatched
//   let count = 0

//   for (let l of s) {
//     letters[l] ? letters[l]++ : letters[l] = 1
//   }

  

//   console.log(letters)

//   freqs = Object.values(letters)
//   console.log(freqs)

//   const set = new Set(freqs)
//   console.log(set)
//   console.log(set.size)

//   diff = (Math.max(...freqs) - Math.min(...freqs))

//   if (diff > 1) {
//     console.log('NO - diff > 1')
//     return 'NO'
//   }

//   for (let i = 1; i < freqs.length; i++) {
//     if (freqs[0] !== freqs[i]) {
//       count ++
//       if (count > 1) {
//         console.log('NO - count > 1')
//         return 'NO'
//       }
//       unMatched = i
//     }
//   }

//   console.log(unMatched)

//   if (freqs[unMatched] > 1) {
//     console.log('NO - unMatched > 1')
//     return 'NO'
//   }

//   console.log('YES')
//   return 'YES'
// }


///////////// *** THIRD DRAFT *** /////////////

// function isValid(s) {
//   // hash table for count of each character
//   const letters = {}

//   // reserved variable for array containing character counts
//   let freqs

//   // reserved variable for difference between least and greatest char counts
//   let diff

//   //reserved variable for last count in freqs which !== first count
//   let lastIneq

//   // count of unlike character counts in freq
//   let count = 0

//   // initialization of character count hash table
//   for (let l of s) {
//     letters[l] ? letters[l]++ : letters[l] = 1
//   }

//   // array containing character counts
//   freqs = Object.values(letters)

//   // difference between least and greatest char counts
//   diff = (Math.max(...freqs) - Math.min(...freqs))

//   // if difference is greater than 1: return NO
//   if (diff > 1) {
//     console.log('NO - diff > 1')
//     return 'NO'
//   }

  
//   for (let i = 1; i < freqs.length; i++) {
//     if (freqs[0] !== freqs[i]) {
//       count ++
//       if (count > 1) return 'NO - count > 1'
//       lastIneq = freqs[i]
//     }
//   }

//   // if last visited freqs which !== first character > 1: return NO
//   if (lastIneq > 1) {
//     console.log('NO - lastIneq')
//     return 'NO'
//   }

//   // if vaild: return YES
//   console.log('YES')
//   return 'YES'
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
