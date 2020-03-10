// create array of all substrings
function collectSubS(s) {
  const subS = []

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      subS.push(s.slice(i, j))
    }
  }

  return subS
}

// check if two strings are anagrams of each other
function isAnagram(s1, s2) {
  const hGram = {}

  for (let i = 0; i < s1.length; i++) {
    hGram[s1[i]] ? hGram[s1[i]]++ : hGram[s1[i]] = 1
  }

  for (let i = 0; i < s2.length; i++) {
    if (!hGram[s2[i]]) return false
    hGram[s2[i]]--
  }

  return true
}

// count number of anagrams in substring array
function aCount(idx, arr) {
  const rem = arr.slice(idx + 1)
  let counter = 0

  for (let i = 0; i < rem.length; i++) {
    if (
      arr[idx].length === rem[i].length && 
      isAnagram(arr[idx], rem[i])
    ) counter++
  }

 return counter
}

function sherlockAndAnagrams(s) {
  const duplicates = s.split('').filter((l, i) => s.indexOf(l) !== i)
  const subS = collectSubS(s)
  let counter = 0

  if (!duplicates.length) return counter

  for (let i = 0; i < subS.length; i++) {
    counter += aCount(i, subS)
  }

  return counter
}

const s = 'abba'
sherlockAndAnagrams(s)