//////// *** SECOND DRAFT *** ////////

function minTime(machines, goal) {
  let minDays = Math.ceil(goal / machines.length) * Math.min(...machines)
  let maxDays = Math.ceil(goal / machines.length) * Math.max(...machines)
  
  while (minDays < maxDays) {
    let midDays = Math.floor((minDays + maxDays) / 2)
    let items = machines.reduce((t, n) => t + Math.floor(midDays / n), 0)

    if (items < goal) minDays = midDays + 1
    if (items >= goal) maxDays = midDays
  }

  return minDays
}


//////// *** FIRST DRAFT *** ////////

// function minTime(machines, goal) {
//   let minDays = Math.ceil((goal / machines.length) * Math.min(...machines))
//   let maxDays = Math.ceil((goal / machines.length) * Math.max(...machines))
  
//   while (minDays <= maxDays) {
//     let midDays = Math.floor((minDays + maxDays) / 2)
//     let totalItems = machines.reduce((t, n) => t += Math.floor(midDays / n), 0)

//     if (totalItems === goal) return midDays
//     if (totalItems < goal) minDays = midDays + 1
//     if (totalItems > goal) maxDays = midDays - 1
//   }
  
// }


const machines = [2, 3, 2]
const goal = 10 // 8
// const machines = [4, 5, 6]
// const goal = 12 // 20
// const machines = [1, 3, 4]
// const goal = 10 // 7
// const machines = [63, 2, 26, 59, 16, 55, 99, 21, 98, 65]
// const goal = 56 // 82
// const machines = [2, 3]
// const goal = 5 // 6
minTime(machines, goal)
