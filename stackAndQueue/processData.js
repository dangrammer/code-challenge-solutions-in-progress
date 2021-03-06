const input = '10\n1 42\n2\n1 14\n3\n1 28\n3\n1 60\n1 78\n2\n2'
// const input = '8\n1 15\n1 17\n3\n1 25\n2\n3\n2\n3'
processData(input)

////////// *** SECOND DRAFT *** //////////

function processData(input) {
  const queries = input.split('\n')
  const queue = []

  for (let i = 1; i <= queries[0]; i++) {
    let command = queries[i].split(' ')

    switch (command[0]) {
      case '1':
        queue.push(command[1])
        break
      case '2':
        queue.shift()
        break
      case '3':
        console.log(queue[0])
        break
      default:
        console.log('invalid input')
        return
    }
  }
}


////////// *** FIRST DRAFT *** //////////

// function processData(input) {
//   const queries = input.split('\n')
//   const lifo = []
//   const fifo = []

//   const lifoTofifo = () => {
//     if (fifo.length === 0) {
//       while (lifo.length > 0) {
//         fifo.push(lifo.pop())
//       }
//     }
//   }

//   for (let i = 1; i <= queries[0]; i++) {
//     let command = queries[i].split(' ')

//     switch (command[0]) {
//       case '1':
//         lifo.push(command[1])
//         break
//       case '2':
//         lifoTofifo()
//         fifo.pop()
//         break
//       case '3':
//         lifoTofifo()
//         console.log(fifo[fifo.length - 1])
//         break
//       default:
//         console.log('invalid input')
//         return
//     }
//   }
// }
