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


///////////// WORKING SOLUTION WITH NOTES AND DETAILED LOGS ///////////////////

// function countTriplets(arr, r) {
//   const hGram = {}  
//   const hGram2 = {} 
//   let count = 0    

//   console.log('\x1b[36m%s\x1b[0m', '|||| FUNCTION INVOKED ||||')
//   console.log('')
//   console.log('input array =', arr, '\nratio =', r)
//   console.log('')

//   if (arr.length < 3) return 0

//   for (let i = arr.length - 1; i >=0; i--) {
//     let t1 = arr[i] 
//     let t2 = t1 * r 
//     let t3 = t2 * r 

//     console.log('\x1b[35m%s\x1b[0m',`* * * LOOP ${arr.length - i} * * * * * * * * * * * * * * * * * * * * * * * * * * *`)
//     console.log('\x1b[34m%s\x1b[0m', `(at the beginning of loop ${arr.length - i})`)
//     console.log('singlets hash =', hGram, '\nduplets hash =', hGram2, '\ntotal count of triplets =', count)
//     console.log('------------------------------------------------------------------')
//     console.log('potential triplet being evaluated:')
//     console.log('\x1b[31m%s\x1b[0m', `| ${t1} • ${t2} • ${t3} |`)
//     console.log('------------------------------------------------------------------')

//     console.log('\x1b[32m%s\x1b[0m', '—first condition: does duplets hash contain 3rd digit of potential triplet?', '\n3rd digit of potential triplet =', t3, hGram2[t3] === undefined ? `\nduplets hash does NOT include ${t3}, so count remains ${count}` : `\nduplets hash DOES include ${t3}, so count is incremented by ${hGram2[t3]}, the number of ${t3}s in the duplets hash`)
//     console.log('')

//     count += hGram2[t3] || 0
    
//     console.log('\x1b[32m%s\x1b[0m', '—second condition: does duplets hash contain 2nd digit of potential triplet?', '\n2nd digit of potential triplet =', t2, hGram2[t2] === undefined ? `\nduplets hash does NOT include ${t2}, so ${t2} is added to the duplets hash\nwith the count of ${t2} from the singlets hash or 0 if ${t2} does not exist in the singlets hash` : `\nduplets hash DOES include ${t2}, so the count of ${t2} in the duplets hash is incremented by\nthe count of ${t2} in the singlets hash or 0 if ${t2} does not exist in the singlets hash`)
//     console.log('')
//     hGram2[t2] ? 
//       hGram2[t2] += hGram[t2] || 0 : 
//         hGram2[t2] = hGram[t2] || 0
    
//     console.log('\x1b[32m%s\x1b[0m', '-third condition: does singlets hash contain 1st digit of potential triplet?', '\n1st digit of potential triplet =', t1, hGram[t1] === undefined ? `\nsinglets hash does NOT include ${t1} so it will be added with count 1` : `\nsinglets hash DOES include ${t1} so ${t1} will be incremented by 1 to ${hGram[t1] + 1}`)
//     console.log('------------------------------------------------------------------')

//     hGram[t1] ? hGram[t1]++ : hGram[t1] = 1

//     console.log('\x1b[34m%s\x1b[0m', `(at the end of loop ${arr.length - i})`)
//     console.log('singlets hash =', hGram, '\nduplets hash =', hGram2, '\ntotal count of triplets =', count)
//     console.log('')
//     console.log('')
//   }

//   console.log('\x1b[36m%s\x1b[0m', '|||| FUNCTION EXECUTED ||||')
//   console.log('at the end of function', '\nsinglets hash =', hGram, '\nduplets hash =', hGram2, '\ntotal count of triplets =', count)
//   return count
// }

///////////// WORKING SOLUTION WITH NOTES \\\\\\\\\\\\\\\\

// // declare function and pass it input array and ratio integer
// function countTriplets(arr, r) {
// // keeps count of occurrences of integer within array
//   const hGram = {}  
// // keeps count of occurrences of number which can be middle digit of
// // a potential triplet
//   const hGram2 = {}
// // counts number of complete triplets
//   let count = 0     
// // if arr contains less than 3 integers, no triplet can exist
//   if (arr.length < 3) return 0
// // decrementing for loop traverses the array from its end which 
// // enables multiplication to be used to evaluate other 
// // possible triplet digits instead of division which is more 
// // computationally expensive
//   for (let i = arr.length - 1; i >=0; i--) {
// // current arr element being evaluated
// // represents 1st digit of potential triplet    
//     let t1 = arr[i]
// // represents 2nd digit of potential triplet
//     let t2 = t1 * r 
// // represents 3rd digit of potential triplet
//     let t3 = t2 * r 
// // case 1: current element is the first digit of potential triplet 
// // i.e. potential triplet = [t1, t1*r, t1*r*r]
// // which means the second and third digits of potential triplet have // been vetted
// // increment count by value associated to the key of hGram2[t3] 
// // wherein said key = 3rd digit of potential triplet 
// // otherwise, if said value is null, increment count by 0
//     count += hGram2[t3] || 0
// // case 2: current element is the second digit of potential triplet 
// // i.e. potential triplet = [t1/r, t1, t1*r]
// // which means the third digit of potential triplet has been vetted
// // if hGram2 already includes key of current element 
// // increment value associated to said key by the value associated 
// // to the key of hGram[t2], unless it's null, then to 0.
// // otherwise, add key of current element to hGram2 and set value to
// // the value associated to the key of hGram[t2]
// // unless it's null, then to 0.
//     hGram2[t2] ?
//       hGram2[t2] += hGram[t2] || 0 :
//         hGram2[t2] = hGram[t2] || 0
// // case 3: current element is the third digit of potential triplet 
// // potential triplet = [t1/r/r, t1/r, t1]
// // which means the first and second digits of potential triplet have
// // NOT been vetted
// // if hGram already includes key of current element 
// // increment value associated to said key by 1 
// // otherwise, add key of current element to hGram and set value to 1
//     hGram[t1] ? hGram[t1]++ : hGram[t1] = 1
//   }
// // return total count of valid triplets within input array
//   return count
// }


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