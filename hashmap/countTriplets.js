function countTriplets(arr, r) {
  const hGram = {}
  const hGram2 = {}
  let triplets = 0

  for (let i = 0; i < arr.length; i++) {
    hGram[arr[i]] ? hGram[arr[i]]++ : hGram[arr[i]] = 1
  }

  for (let i = 0; i < arr.length; i++) {
    let n1 = arr[i] 
    let n2 = n1 / r 

    if (hGram[n2]) {
      hGram2[n1] ? hGram2[n1] += hGram[n2] : hGram2[n1] = hGram[n2]
    }
  }

  for (let i = 0; i < arr.length; i++) {
    let n3 = arr[i]
    let n2 = n3 / r
  
    if (hGram2[n2]) triplets += hGram2[n2]
  }

  console.log(hGram, hGram2, triplets)
  return triplets
}

// const arr = [1, 3, 9, 9, 27, 81] // => 6
// const r = 3
const arr = [1, 5, 5, 25, 125] // => 4
const r = 5

countTriplets(arr, r)
