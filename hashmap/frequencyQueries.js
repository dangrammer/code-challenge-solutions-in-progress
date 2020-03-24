//////////////// *** FIRST DATE *** ////////////////

function freqQuery(queries) {
  const result = []
  const hGram = {}

  for (let q of queries) {
    const command = q[0]
    const value = q[1]

    if (value > 10 ** 9) return

    switch (command) {
      case 1:
        hGram[value] ? hGram[value]++ : hGram[value] = 1
        break
      case 2:
        if (hGram[value]) hGram[value]--
        break
      case 3:
        Object.values(hGram).includes(value) ? result.push(1) : result.push(0)
        break
    }
  }

  console.log(result)
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

// -  1 x: Insert x in your data structure.
// -  2 y: Delete one occurence of y from your data structure, if present.
// -  3 z: Check if any integer is present whose frequency is exactly z. If yes, print 1 else 0.

// output: Return an integer array consisting of all the outputs of queries of type 3.