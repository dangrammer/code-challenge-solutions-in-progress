const days = 5
const debits = [2, 3, 4, 2, 3, 6, 8, 4, 5] // 2
// const days = 3
// const debits = [10, 20, 30, 40, 50] // 1
// const days = 2
// const debits = [2, 4, 5, 3, 2, 6] // 2
activityNotifications(debits, days) 


/////////// *** FIFTH DRAFT *** ////////////

function getMedianx2(countArr, days) {
  let sum = 0

  for (let i = 0; i < countArr.length; i++) {
    sum += countArr[i]
    if (sum * 2 === days) return (i * 2 + 1)
    if (sum * 2 > days) return (i * 2)
  }

}

function activityNotifications(debits, days) {
  const countArr = new Array(201).fill(0)
  let notices = 0

  for (let i = 0; i < days; i++) {
    countArr[debits[i]]++
  }

  for (let i = days; i < debits.length; i++) {
    let medianx2 = getMedianx2(countArr, days)
    if (debits[i] >= medianx2) notices++
    countArr[debits[i - days]]--
    countArr[debits[i]]++
  }

  console.log(notices)
  return notices
}

/////////// Customized print log for function analysis (fifth draft) //////////

// function getMedianx2(countArr, days) {
//   console.log('      count array:', countArr) // [0, 0, 2, 2, 1, 0, 0, 0, 0, 0]
//   console.log('      trailing day count:', days)
//   let sum = 0

//   console.log('\x1b[34m%s\x1b[0m', '      getMedian loop:')
//   for (let i = 0; i < countArr.length; i++) {
//   console.log('\x1b[31m%s\x1b[0m', '        iteration', i + 1)   
//     sum += countArr[i]
//   console.log('          accumulation sum:', sum)  
//   console.log('          current index:', i)  
//     if (sum * 2 === days) return (i * 2 + 1)
//     if (sum * 2 > days) return (i * 2)
//   }
//   console.log('')

// }

// function activityNotifications(debits, days) {
//   console.log('input:')
//   console.log('  debits array:', debits)
//   console.log('  day span', days)
//   console.log('')
//   const countArr = new Array(10).fill(0)
//   console.log('initialize:')
//   console.log('  count array:', countArr)
//   let notices = 0
//   console.log('  notices:', notices)
//   console.log('')

//   for (let i = 0; i < days; i++) {
//     countArr[debits[i]]++
//   }
//   console.log('load count array:')
//   console.log('  count array:', countArr)
//   console.log('')

//   console.log('\x1b[35m%s\x1b[0m', 'main loop:')
//   for (let i = days; i < debits.length; i++) {
//   console.log('\x1b[36m%s\x1b[0m', '  iteration', i - (days - 1))  
//   console.log('    daily debit:', debits[i])
//   console.log('    trailing days:', debits.slice(i - days, i))
//   console.log('')
//   console.log('\x1b[32m%s\x1b[0m', '    get median function:')
//     const medianx2 = getMedianx2(countArr, days)
//   console.log('')
//   console.log('    medianx2:', medianx2)  
//     if (debits[i] >= medianx2) notices++
//   console.log(debits[i] >= medianx2  ? `    daily debit(${debits[i]}) is greater than or equal to median * 2 = ${medianx2}, increment notices` : `    daily debit(${debits[i]}) is less than median * 2 = ${medianx2}, no adjustment to notices`)  
//   console.log(debits[i] >= medianx2  ? `    notices + 1 = ${notices}` : `    notices = ${notices}`)
//   console.log('')
//   if (i === debits.length - 1) break
//   console.log('    count array before adjustment:', countArr)
//   console.log(`      countArr[${debits[i - days]}]--`)
//     countArr[debits[i - days]]--
//   console.log(`      countArr[${debits[i]}]++`)  
//     countArr[debits[i]]++
//   console.log('    count array after adjustment :', countArr)
//   console.log('')  
//   }

//   console.log('output:')
//   console.log('  notices:', notices)
//   console.log('')
//   return notices
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
