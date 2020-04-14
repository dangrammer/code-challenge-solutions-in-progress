////////// *** FIRST DRAFT *** //////////

// function activityNotifications(debits, days) {
//   let notices = 0

//   for (let i = days; i < debits.length; i++) {
//     const trail = debits.slice(i - days, i).sort((a, b) => a - b)
//     const median = trail.length % 2 === 0 ? 
//       trail[(trail.length / 2) - 1] + trail[(trail.length / 2)] : 
//         trail[Math.floor(trail.length / 2)] * 2
//     if (debits[i] >= median) notices++
//   }

//   return notices
// }

////////// *** SECOND DRAFT *** //////////

// function activityNotifications(debits, days) {
//   const countArr = new Array(Math.max(...debits)).fill(0)
//   const medPos = days % 2 === 0 ? days / 2 : Math.ceil(days / 2)
//   let trailEnd = days
//   let notices = 0
//   let median

//   for (let n in debits) countArr[debits[n]]++

//   while (trailEnd < debits.length) {
//     median = getMedian(countArr, days, medPos)
//     if (debits[trailEnd] >= median * 2) notices++
//     countArr[debits[trailEnd - days]]--
//     countArr[debits[trailEnd]]++
//     trailEnd++
//   }

//   console.log(notices)
//   return notices
// }

// function getMedian(countArr, days, medPos) {
//   let counter = 0
//   let left = 0

//   while (counter < medPos) {
//     counter += countArr[left]
//     left++
//   }

//   let right = left
//   left--

//   if (counter < medPos || days % 2 !== 0) {
//     return left
//   } else {
//     while (countArr[right] === 0) right++
//     return (left + right) / 2
//   }
// }


////////// *** THIRD DRAFT *** //////////

// function getMedian(hGram, days, medPos) {
//   const keys = Object.keys(hGram)
//   let idx = 0
//   let a = 0
//   let b = 0

//   while (medPos > 0) {
//     const key = keys[idx]
//     medPos -= hGram[key]
//     if (medPos < 1) a = key
//     if (!b && medPos < 2) b = key
//     idx++
//   }
  
//   return days % 2 === 0 ? (a + b) / 2 : a
// }

// function activityNotifications(debits, days) {
//   const hGram = {}
//   let count = 0
//   let median
//   const medPos = days % 2 === 0 ? days / 2 : Math.ceil(days / 2)

//   for (let i = 0; i < days; i++) {
//     hGram[debits[i]] ? hGram[debits[i]]++ : hGram[debits[i]] = 1
//   }

//   for (let i = 0; i < debits.length - days; i++) {
//     let j = i + days
//     median = getMedian(hGram, days, medPos)

//     hGram[debits[i]] ? hGram[debits[i]]-- : delete hGram[debits[i]]
//     hGram[debits[j]] ? hGram[debits[j]]++ : hGram[debits[j]] = 1

//     if (debits[j] >= median * 2) count++
//   }
  
//   return count
// }


/////////// *** FOURTH DRAFT *** ////////////

// function activityNotifications(debits, days) {
//   const max = 201
//   const countArr = new Array(max).fill(0)
//   let notices = 0 

//   for (let i = 0; i < debits.length; i++) {
//     countArr[debits[i]]++
//   }

//   const median = () => {
//     let idx = 0
//     let x
//     let y

//     for (let i = 0; i < max; i++) {
//       idx += countArr[i]
//       x = i
//       if (idx * 2 >= days) break
//     }

//     if (days % 2 === 1 || idx * 2 > days) return x

//     for (let i = x + 1; i < max; i++) {
//       if (countArr[i] !== 0) break
//       y = i
//     }

//     return (x + y) / 2
//   }

//   for (let i = days; i < debits.length; i++) {
//     if (debits[i] >= median() * 2) notices++
//     countArr[debits[i - days]]--
//     countArr[debits[i]]++
//   }    

//   return notices
// }


const days = 5
const debits = [2, 3, 4, 2, 3, 6, 8, 4, 5] // 2
// const days = 3
// const debits = [10, 20, 30, 40 , 50] // 1
activityNotifications(debits, days) 



function activityNotifications(debits, days) {
  const dic = {}
  const ans = 0

  const find = (idx) => {
    let s = 0
    for (let i = 0; i < 200; i++) {
      let freq = 0
      if (dic[i]) freq = dic[i]
      s = s + freq
      if (s >= idx) return i
    }
  }

  for (let i = 0; i < debits.length; i++) {
    let val = debits[i]
      
    if (i >= days) {
      let med = find((days / 2) + (days % 2))

      if (days % 2 === 0) {
        let ret = find((days / 2) + 1)
        if (val >= med + ret) ans++
      } else {
        if (val >= med * 2) ans++
      }
    }
  
    dic[val] ? dic[val]++ : dic[val] = 0
  
    if (i >= days) {
      let prev = debits[i - days]
      dic[prev]++
    }
  }

  console.log(dic)
  console.log(ans)
  return ans
}
