function pairs(k, arr) {
  const hash = {}
  let total = 0

  for (let n of arr) {
    hash[n] ? hash[n]++ : hash[n] = 1
  }

  for (let i = 0; i < arr.length; i++) {
    let val = Math.abs(arr[i] + k)
    if (hash[val]) total++
  }

  return total
}

const k = 2  
const arr = [1, 5, 3, 4, 2] // 3
pairs(k, arr)



////// sketch work //////

// for (let i = 0; i < arr.length; i++) {
//   let targetVal = Math.abs(arr[i] + k)
//   if (hash[targetVal]) total++
//   if (hash[targetVal]) hash[targetVal] = 1
//   if (!hash[arr[i]]) hash[arr[i]] = 1
// }

////working one/////
// for (let i = 0; i < arr.length; i++) {
//   let targetVal = Math.abs(arr[i] + k)
//   if (hash[targetVal]) {
//     total++
//     console.log(`${arr[i]} - ${targetVal} = ${k}`)
//   }
// }