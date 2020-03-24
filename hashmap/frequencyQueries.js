//////////////// *** FIRST DRAFT *** ////////////////

// function freqQuery(queries) {
//   const result = []
//   const hGram = {}

//   for (let q of queries) {
//     const [command, value] = q

//     switch (command) {
//       case 1:
//         hGram[value] ? hGram[value]++ : hGram[value] = 1
//         break
//       case 2:
//         if (hGram[value]) hGram[value]--
//         break
//       case 3:
//         Object.values(hGram).includes(value) ? result.push(1) : result.push(0)
//         break
//     }
//   }

//   console.log(result)
//   return result
// }

//////////////// *** SECOND DRAFT *** ////////////////

function freqQuery(queries) {
  const result = []
  const nums = {}
  const frqs = {}

  for (let q of queries) {
    const [command, val] = q
    
    switch (command) {
      case 1:
        nums[val] = nums[val] || 0
        if (nums[val] > 0) frqs[nums[val]]--
        nums[val]++
        frqs[nums[val]] ? frqs[nums[val]]++ : frqs[nums[val]] = 1
        break
      case 2:
        if (nums[val] > 0) {
          frqs[nums[val]]--
          nums[val]--
          frqs[nums[val]] ? frqs[nums[val]]++ : frqs[nums[val]] = 1
        }
        break
      case 3:
        result.push(frqs[val] > 0 ? 1 : 0)
        break
    }
  }

  return result
}

// queries = [
//   [1, 5],
//   [1, 6],
//   [3, 2],
//   [1, 10],
//   [1, 10],
//   [1, 6],
//   [2, 5],
//   [3, 2]
// ]

// queries = [
//   [3, 4],
//   [2, 1003],
//   [1, 16],
//   [3, 1]
// ]

queries = [
  [1, 3],
  [2, 3],
  [3, 2],
  [1, 4],
  [1, 5],
  [1, 5],
  [1, 4],
  [3, 2],
  [2, 4],
  [3, 2]
]

freqQuery(queries)
