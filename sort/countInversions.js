// const arr = [1, 1, 1, 2, 2] // 0
const arr = [2, 1, 3, 1, 2] // 4
countInversions(arr)

////////// *** FIRST DRAFT *** //////////

function countInversions(arr) {
  const spanA = arr.slice(0, arr.length / 2)
  const spanB = arr.slice(arr.length / 2, arr.length)
  let swaps = 0

  const merge = (a, b) => {
    const mergedArr = []
    
    while (a.length && b.length) {
      mergedArr.push(a[0] < b[0] ? a.shift() : b.shift())
      swaps++
    }
   
    return mergedArr.concat(a).concat(b)
  }

  if (arr.length === 1) return arr
  const sortedArr = merge(countInversions(spanA), countInversions(spanB))

  console.log(swaps)
  return swaps
  // console.log(sortedArr)
  // return sortedArr
}