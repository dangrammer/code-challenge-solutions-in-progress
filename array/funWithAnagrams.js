// This solution traverses input array in linear order, which
// allows an anagram of an element to appear later in the sequence.
// To my understanding, the problem statement required this.
// However, at least one example solution did not include
// a later element which was an anagram of the first element
// yet not an anagram of the element which preceded it,
// which should have been valid and included in the returned output.
// It was a point of confusion... 

function funWithAnagrams(text) {
  const result = [text[0]]
 
  while (text.length > 0) {
    let head = result[result.length - 1]
    let anaG = text[0]

    if (isAnagram(anaG, head)) {
      text.splice(anaG, 1)
    } else {
      result.push(text.shift())
    }
  }

  return(result.sort())
}


// helper function to check if two strings are anagrams

function isAnagram(s1, s2) {
  const hGram = {}

  if (s1.length !== s2.length) return false
   
  for (let i = 0; i < s1.length; i++) {
    hGram[s1[i]] ? hGram[s1[i]]++ : hGram[s1[i]] = 1
  }

  for (let i = 0; i < s2.length; i++) {
    if (hGram[s2[i]] > 0) {
      hGram[s2[i]]--
    } else {
      return false
    }
  }

  return true
}


// invoke function

const text = ['code', 'aaagmnrs', 'anagrams', 'doce']
funWithAnagrams(text)

// => ['aaagmnrs', 'code', 'doce']
