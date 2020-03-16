/////////// * FIRST DRAFT * ///////////

function stickers_for(phrase) {
  const hGram = {}
  const insta = 'instagram'

  // build histogram to track values of i, n, s, t, a, g, r, m
  for (let i = 0; i < insta.length; i++) {
    if (!hGram[insta[i]]) hGram[insta[i]] = 0
  }

  // produce value count of phrase characters in histogram
  for (let i = 0; i < phrase.length; i++) {
    hGram[phrase[i]] ? hGram[phrase[i]]++ : hGram[phrase[i]] = 1
  }

  // set value of stickers needed based on 'a', halved because each sticker has two 'a's
  const aVal = Math.ceil(hGram['a'] / 2)

  // remove consideration of 'a' value and collect max value of remaining set
  hGram['a'] = 0
  const maxVal = Math.max(...Object.values(hGram))

  // return greater of aVal or maxVal
  console.log(Math.max(aVal, maxVal))
  return Math.max(aVal, maxVal)
}

// const phrase = 'tiara' // 1
// const phrase = 'artisan martians' // 2
const phrase = 'tagaaaaaming giant gnats' // 3

stickers_for(phrase)