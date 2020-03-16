function funWithAnagrams(text) {
  const result = []

  result.push(text.shift())
  while (text.length > 0) {
    if (text[0].split('').sort().join('') === result.pop().split('').sort().join('')) {
      text.shift()
    } else {
      result.push(text.shift())
    }
  }

  console.log(result.sort())
  return(result.sort())
}

const text = ['code', 'aaagmnrs', 'anagrams', 'doce']
funWithAnagrams(text)

// function isAnagram(s1, s2) {
//   const hGram = {}

//   for (let i = 0; i < s1.length; i++) {
//     hGram[s1[i]] ? hGram[s1[i]]++ : hGram[s1[i]] = 1
//   }

//   console.log(hGram)
  
//   for (let i = 0; i < s2.length; i++) {
//     console.log(s2[i])
//     if (hGram[s2[i]]) {
//       if (hGram[s2[i]] > 0) hGram[s2[i]]--
//     } else {
//       console.log(false)
//       return false
//     } 
//   }

//   console.log(true)
// }

// isAnagram('code', 'doc')

