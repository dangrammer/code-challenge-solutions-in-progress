// function countTriplets(arr, r) {
//   const hGram = {} 
//   const hGram2 = {} 
//   let triplets = 0

//   for (let i = 0; i < arr.length; i++) {
//     hGram[arr[i]] ? hGram[arr[i]]++ : hGram[arr[i]] = 1
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let n2 = arr[i] 
//     let n1 = n2 / r 

//     if (hGram[n1]) {
//       hGram2[n2] ? hGram2[n2] += hGram[n1] : hGram2[n2] = hGram[n1]
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let n3 = arr[i]
//     let n2 = n3 / r
  
//     if (hGram2[n2]) triplets += hGram2[n2]
//   }

//   console.log(arr, hGram, hGram2, triplets)
//   return triplets
// }

// const arr = [1, 3, 9, 9, 27, 81] // => 6
// const r = 3

const arr = [1, 5, 5, 25, 125] // => 4
const r = 5

// const arr = [1, 2, 1, 2, 4] // => 3
// const r = 2

countTriplets(arr, r)


// REFACTOR IN PROGRESS \\

// function countTriplets(arr, r) {
//   const singles = {}
//   const duplets = {}
//   // const triplets = {}
//   let count = 0

//   for (let i = 0; i < arr.length; i++) {
//     let n = arr[i]

//     duplets[n * r] ? duplets[n * r] += duplets[n] : duplets[n * r] = singles[n]
//     singles[n] ? singles[n]++ : singles[n] = 1

//     console.log('at end of loop', i + 1)
//     console.log(arr[i], 'singles:', singles, 'duplets:', duplets,  count)
//     console.log('')
//   }

//   console.log('final', arr, singles, duplets, count)
//   return count
// }

function countTriplets(arr, r) {
  const hGram = {}
  const hGram2 = {}
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    let n = arr[i]

    if (hGram2[n * r]) count += hGram2[n * r]
    if (hGram[n * r]) hGram2[n] = hGram2[n] + hGram[n * r]
    
    hGram[n] = hGram[n] + 1
    console.log(n, hGram[n * r])
    console.log('')
  }

  console.log('final', arr, hGram, hGram2, count)
  return count
}
