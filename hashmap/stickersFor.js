/////////// * FIRST DRAFT * ///////////

// function stickers_for(phrase) {
//   const hGram = {}
//   const insta = 'instagram'

//   // build histogram to track values of i, n, s, t, a, g, r, m
//   for (let i = 0; i < insta.length; i++) {
//     if (!hGram[insta[i]]) hGram[insta[i]] = 0
//   }

//   // produce value count of phrase characters in histogram
//   for (let i = 0; i < phrase.length; i++) {
//     hGram[phrase[i]] ? hGram[phrase[i]]++ : hGram[phrase[i]] = 1
//   }

//   // set value of stickers needed based on 'a', halved because each sticker has two 'a's
//   const aVal = Math.ceil(hGram['a'] / 2)

//   // remove consideration of 'a' value and collect max value of remaining set
//   hGram['a'] = 0
//   const maxVal = Math.max(...Object.values(hGram))

//   // return greater of aVal or maxVal
//   console.log(Math.max(aVal, maxVal))
//   return Math.max(aVal, maxVal)
// }

/////////// * SECOND DRAFT * ///////////

function stickersFor(phrase) {
  const hGram = {}
  let max = 0

  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] !== ' ') {
      hGram[phrase[i]] ? hGram[phrase[i]]++ : hGram[phrase[i]] = 1
    }
  }

  for (let l in hGram) {
    if (l === 'a') {
      max = Math.max(max, Math.ceil(hGram[l] / 2))
    } else {
      max = Math.max(max, hGram[l])
    }
  }

  console.log(`${max} ${max === 1 ? 'sticker' : 'stickers'} needed to spell out "${phrase}"`)
  return max
}

// const phrase = 'tiara' // => 1
// const phrase = 'artisan martians' // => 2
const phrase = 'taming giant gnats' // => 3
stickersFor(phrase)
