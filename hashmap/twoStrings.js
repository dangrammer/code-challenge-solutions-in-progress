function twoStrings(s1, s2) {
  const hGram = {}

  for (let i = 0; i < s1.length; i++) {
    hGram[s1[i]] ? hGram[s1[i]] += 1 : hGram[s1[i]] = 1
  }

  for (let i = 0; i < s2.length; i++) {
    if (hGram[s2[i]] >= 1) return 'YES'
  }

  return 'NO'
}

const s1 = 'howdy'
const s2 = 'how'

twoStrings(s1, s2)