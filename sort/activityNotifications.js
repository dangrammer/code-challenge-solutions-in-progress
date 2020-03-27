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

function activityNotifications(debits, days) {
  const countSort = new Array(10).fill(0) ////// * change to 201
  const medPos = days % 2 === 0 ? days / 2 : Math.floor(days / 2) + 1
  let current = 0
  let end = days
  let notices = 0
  let median

  for (let n in debits) countSort[debits[n]]++

  while (end < debits.length) {
    console.log(countSort, days, medPos)
    median = getMedian(countSort, days, medPos)
    console.log(median)
    if (debits[end] >= median * 2) notices++
    countSort[debits[current]]--
    countSort[debits[end]]++
    current++
    end++
  }

  console.log(notices)
  return notices
}

function getMedian(countSort, days, medPos) {
  let counter = 0
  let left = 0

  while (counter < medPos) {
    counter += countSort[left]
    left++
  }

  let right = left
  left--

  if (counter < medPos || days % 2 !== 0) {
    return left
  } else {
    while (countSort[right] === 0) right++
    return (left + right) / 2
  }
}

const days = 5
const debits = [2, 3, 4, 2, 3, 6, 8, 4, 5]
activityNotifications(debits, days)
