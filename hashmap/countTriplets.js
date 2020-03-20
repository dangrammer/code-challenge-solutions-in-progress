////////////// ***FIRST DRAFT*** //////////////////

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


////////////// ***SECOND DRAFT*** //////////////////

function countTriplets(arr, r) {
  const hGram = {}  
  const hGram2 = {}
  let count = 0

  if (arr.length < 3) return 0

  for (let i = arr.length - 1; i >=0; i--) {
    let t1 = arr[i]
    let t2 = t1 * r
    let t3 = t2 * r

    count += hGram2[t3] || 0

    hGram2[t2] ? 
      hGram2[t2] += hGram[t2] || 0 : 
        hGram2[t2] = hGram[t2] || 0

    hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
  }

  return count
}

// const arr = [1, 2, 1, 2, 4] // => 3
// const r = 2
// const arr = [1, 5, 5, 25, 125] // => 4
// const r = 5
const arr = [1, 3, 9, 9, 27, 81] // => 6
const r = 3
countTriplets(arr, r)


/////////////// REFACTOR SKETCHES //////////////

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

// function countTriplets(arr, r) {
//   const hGram = {}
//   const hGram2 = {}
//   let count = 0

//   for (let i = 0; i < arr.length; i++) {
//     let n = arr[i]

//     if (hGram2[n * r]) count += hGram2[n * r]
//     if (hGram[n * r]) hGram2[n] = hGram2[n] + hGram[n * r]
    
//     hGram[n] = hGram[n] + 1
//     console.log(n, hGram[n * r])
//     console.log('')
//   }

//   console.log('final', arr, hGram, hGram2, count)
//   return count
// }

///////////// working solution with notes ///////////////////

// function countTriplets(arr, r) {
//   const hGram = {}  //counts occurences of element
//   const hGram2 = {} //counts doubles
//   let count = 0

//   if (arr.length < 3) return 0

//   // traversing the array from rear, helps avoid division
//   for (let i = arr.length - 1; i >=0; i--) {
//     let t1 = arr[i]
//     let t2 = t1 * r
//     let t3 = t2 * r

//     // case: t1 is the first element (t1, t1*r, t1*r*r)
//     count += hGram2[t3] || 0

//     // case: t1 is the second element (t1/r, t1, t1*r)
//     hGram2[t2] ? 
//       hGram2[t2] += hGram[t2] || 0 : 
//         hGram2[t2] = hGram[t2] || 0

//     // case: t1 is the third element (t1/(r*r), t1/r, t1)    
//     hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
//   }

//   return count
// }
