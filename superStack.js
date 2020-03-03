// super stack ////////////////////////////////////////

function superStack(operations) {
  let stack = []

  if (operations.length < 1) {
    console.log('ERROR: Invalid input')
    return
  }

  for (let i = 0; i < operations.length; i++) {
    let arr = operations[i].split(' ')

    switch (arr[0]) {
      case 'push':
        stack.push(parseInt(arr[1], 10))
        console.log(stack[stack.length - 1])
        break
    
      case 'pop':
        if (stack.length > 0) stack.pop()
        if (stack.length === 0) {
          console.log('EMPTY')
        } else {
          console.log(stack[stack.length - 1])
        }
        break
    
      case 'inc':
        let addValue = parseInt(arr[2], 10)
        let addCount = parseInt(arr[1], 10)
        if (addCount >= 1 && addCount <= stack.length) {
          for (let i = 0; i < addCount; i++) {
            stack[i] += addValue
          }
        }
        console.log(stack[stack.length - 1])
        break

      default:
        return
    }
  }
}

let input = [
  'push 4', 
  'pop', 
  'push 3', 
  'push 5', 
  'push 2', 
  'inc 3 1', 
  'pop', 
  'push 1', 
  'inc 2 2', 
  'push 4', 
  'pop', 
  'pop'
]

superStack(input)
