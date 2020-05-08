function countingSort(arr) {
  const countArr = new Array(Math.max(...arr) + 1).fill(0)
  const accumulationArr = [0]
  const sortedArr = new Array(arr.length).fill(0)
  let accumulator = 0

  for (const i of arr) {
    countArr[i]++
  }

  for (let i = 0; i < countArr.length - 1; i++) {
    accumulator += countArr[i]
    accumulationArr.push(accumulator)
  }

  for (let i = 0; i < arr.length; i++) {
    let index = accumulationArr[arr[i]]
    sortedArr[index] = arr[i]
    accumulationArr[arr[i]]++
  }

  console.log(sortedArr)
  return sortedArr
}

// const arr = [1, 0, 3, 1, 3, 1]
const arr = [2, 4, 7, 9.7, 8, 5, 3, 4, 2]
// const arr = [5, 1, 4, 4, 3, 2]
countingSort(arr)