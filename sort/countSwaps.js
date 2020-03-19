// uses bubble sort

function countSwaps(a) {
  let numSwaps = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        numSwaps++
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} ${numSwaps === 1 ? 'swap' : 'swaps'}.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}

const a = [6, 4, 1]
countSwaps(a)
