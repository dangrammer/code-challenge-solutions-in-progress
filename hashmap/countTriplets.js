function countTriplets(arr, r) {
  const hGram = {}
  const hGram2 = {}
  let triplets = 0

  for (let i = 0; i < arr.length; i++) {
    hGram[arr[i]] ? hGram[arr[i]]++ : hGram[arr[i]] = 1
  }

  for (let i = 0; i < arr.length; i++) {
    if (hGram[arr[i] / r]) {
      hGram2[arr[i]] ? hGram2[arr[i]]++ : hGram2[arr[i]] = 1
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let j = i + 1
    if (hGram2[arr[j] * r]) {
      triplets++
      // hGram2[arr[j]]--
      // triplets += hGram2[arr[j]]
      // hGram2[arr[j]] = null
    }
  }
  console.log(hGram, hGram2, triplets)
  return triplets
}

const arr = [1, 3, 9, 9, 27, 81]
const r = 3
// const arr = [1, 5, 5, 25, 125]
// const r = 5

countTriplets(arr, r)
