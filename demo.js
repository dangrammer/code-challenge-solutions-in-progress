// balanced paranthesis ////////////////////

function getMin(s) {
  let legend = {'(': ')'}
  let stack = []
  let insertions = 0
  let result = s

  if (s[0] === ')') {
    s = '(' + s
    insertions += 1
  }

  if (s[s.length - 1] === '(') {
    s = s + ')'
    insertions += 1
  }

  for (let i = 0; i < s.length; i++) {
    if (legend[s[i]]) {
      stack.push(s[i])
    } else if (legend[stack.pop()] !== s[i]) {
      result = s.slice(0, s[i]) + legend[stack.pop()] + s.slice(s[i] + 1, s.length)
      insertions += 1
    }
  }
  console.log(s)
  console.log(insertions)
  return insertions
}

// getMin('((()))(')



// counting pairs ////////////////////

function countPairs(numbers, k) {
  let result = []

  if (numbers.length < 2 || k < 0) {
    console.log('ERROR: Invalid input')
    return
  }

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      let nums = numbers
      nums.splice(numbers.indexOf(numbers[i]), 1)
      for (let j = 0; j < nums.length; j++) {
        if (nums[j] >= 0) {
          if (numbers[i] + k === nums[j]) {
            if (!result.includes(`${numbers[i]}, ${nums[j]}`)) {
              result.push(`${numbers[i]}, ${nums[j]}`)
            }
          }
        } 
      }
    }
  }
  console.log(result)
  console.log(result.length)
  return result.length
}

// countPairs([2, 5, 5, 2], 3)



// super stack ////////////////////

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

// let input = ['push 4', 'pop', 'push 3', 'push 5', 'push 2', 'inc 3 1', 'pop', 'push 1', 'inc 2 2', 'push 4', 'pop', 'pop']
// superStack(input)