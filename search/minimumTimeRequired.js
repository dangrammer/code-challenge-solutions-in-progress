function minTime(machines, goal) {
  let minDays = Math.ceil((goal / machines.length) * Math.min(...machines))
  let maxDays = Math.ceil((goal / machines.length) * Math.max(...machines))
  let i = 0

  while (minDays < maxDays) {
    let midDays = Math.floor((minDays + maxDays) / 2)
    totalItems = machines.reduce((t, n) => t += Math.floor(midDays / n))

    console.log('loop #', i)
    console.log('maxDays =', maxDays)
    console.log('minDays =', minDays)
    console.log('midDays =', midDays)
    console.log('totalItems =', totalItems)
    console.log('')
    i++
  

    if (totalItems === goal) {
      console.log('inner result =', midDays)
      return midDays
    }
    if (totalItems < goal) minDays = midDays + 1
    if (totalItems > goal) maxDays = midDays - 1
  }
  
}

const machines = [2, 3, 2]
const goal = 10 // 8
// const machines = [4, 5, 6]
// const goal = 12 // 20
// const machines = [1, 3, 4]
// const goal = 10 // 7
minTime(machines, goal)

