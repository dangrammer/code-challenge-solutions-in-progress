// uses bubble sort

function countSwaps(a) {
  let swaps = 0

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]]
        swaps++
      }
    }
  }

  console.log(`Array is sorted in ${swaps} ${swaps === 1 ? 'swap' : 'swaps'}.`)
  console.log(`First Element: ${a[0]}`)
  console.log(`Last Element: ${a[a.length - 1]}`)
}

const a = [6, 4, 1]
countSwaps(a)
