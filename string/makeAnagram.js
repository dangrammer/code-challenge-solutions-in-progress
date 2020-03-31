function makeAnagram(a, b) {
  const hGram = {}
  const str1 = a.length >= b.length ? a : b
  const str2 = a.length < b.length ? a : b
  let count = 0

  for (let i = 0; i < str1.length; i++) {
    hGram[str1[i]] ? hGram[str1[i]]++ : hGram[str1[i]] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    hGram[str2[i]] > 0 ? hGram[str2[i]]-- : count++
  }

  for (let key in hGram) {
    count += hGram[key]
  }

  // alternative to loop at line 15
  // count += Object.values(hGram).reduce((a, b) => a + b)
  
  console.log(count)
  return count
}

const a = 'cde'
const b = 'abc'
makeAnagram(a, b)
//=> 2
