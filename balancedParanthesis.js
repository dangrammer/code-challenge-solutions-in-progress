// balanced paranthesis ////////////////////////////////////////

// *FIRST DRAFT* //

// function getMin(string) {
//   let legend = {'(': ')'}
//   let stack = []
//   let insertions = 0
//   let result = string

//   if (string[0] === ')') {
//     string = '(' + string
//     insertions += 1
//   }

//   if (string[string.length - 1] === '(') {
//     string = string + ')'
//     insertions += 1
//   }

//   for (let i = 0; i < string.length; i++) {
//     if (legend[string[i]]) {
//       stack.push(string[i])
//     } else if (legend[stack.pop()] !== string[i]) {
//       result = string.slice(0, string[i]) + legend[stack.pop()] + string.slice(string[i] + 1, string.length)
//       console.log(result)
//       insertions += 1
//     }
//   }
//   console.log(result, insertions)
//   return insertions
// }

// *SECOND DRAFT* //

function getMin(string) {
  let closed = 0
  let open = 0

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') closed++
    if (string[i] === ')') {
      closed > 0 ? closed-- : open++
    }
  }

  return closed + open
}

getMin('()(())(((')



