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

// getMin('()(())(((')



// counting pairs ////////////////////////////////////////

// *FIRST DRAFT* //

// function countPairs(numbers, k) {
//   let result = []

//   if (numbers.length < 2 || k < 0) {
//     console.log('ERROR: Invalid input')
//     return
//   }

//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] >= 0) {
//       let nums = numbers
//       nums.splice(numbers.indexOf(numbers[i]), 1)
//       for (let j = 0; j < nums.length; j++) {
//         if (nums[j] >= 0) {
//           if (numbers[i] + k === nums[j]) {
//             if (!result.includes(`${numbers[i]}, ${nums[j]}`)) {
//               result.push(`${numbers[i]}, ${nums[j]}`)
//             }
//           }
//         } 
//       }
//     }
//   }

//   return result.length
// }

// countPairs([2, 5, 5, 2], 3)

// *SECOND DRAFT* //

function findAddendSumPairs(arr, k) {  
  const set = new Set(arr)  
  const pairs = []

  for (n of set) {    
    if (set.has(n - k)) pairs.push([n, n - k])
  } 

  return pairs.length
}

// findAddendSumPairs([1, 2, 3, 4, 5, 6], 2)
// findAddendSumPairs([6, 6, 1, 5, 10, 0, -5], -5)



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

// let input = [
//   'push 4', 
//   'pop', 
//   'push 3', 
//   'push 5', 
//   'push 2', 
//   'inc 3 1', 
//   'pop', 
//   'push 1', 
//   'inc 2 2', 
//   'push 4', 
//   'pop', 
//   'pop'
// ]

// superStack(input)



// sock merchant (find all pairs) ////////////////////////////////////////

function sockMerchant(n, ar) {
  let likeSocks = {}
  let pairs = 0
  
  for (let i = 0; i < n; i++) {
    likeSocks[ar[i]] ? likeSocks[ar[i]] += 1 : likeSocks[ar[i]] = 1
  }
  
  for (let sock in likeSocks) {
    if (likeSocks[sock] % 2 === 0) {
      pairs += likeSocks[sock] / 2
    } else {
      pairs += (likeSocks[sock] - 1) / 2 
    }
  }
  // console.log(pairs)
  return pairs
}

// let n = 9
// let ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
// sockMerchant(n, ar)



// counting valleys ////////////////////////////////////////

function countingValleys(n, s) {
  let altitude = 0
  let valleys = 0
  let inValley = false
  
  for (let i = 0; i < n; i++) {
    s[i] === 'D' ? altitude -= 1 : altitude += 1
    if (altitude === -1 && !inValley) { 
      inValley = true
      valleys += 1
    }
    if (altitude === 0 && inValley) inValley = false
  }
  // console.log(valleys)
  return valleys
}

// let path = 'DDUUUUDDDDUU'
// countingValleys(12, path)



// jumping on the clouds ////////////////////////////////////////

function jumpingOnClouds(c) {
  let jumpCount = 0
  let i = 0
    
  while(i < c.length - 1) { 
    if (i + 2 < c.length && c[i + 2] === 0) {
      jumpCount += 1
      i += 2
    } else {
      jumpCount += 1
      i += 1
    }     
  }
  return jumpCount
}

// c = [0, 0, 1, 0, 0, 1, 0]
// jumpingOnClouds(c)



// repeated string /////////////////////////////////////////////

// *FIRST DRAFT* //

// function repeatedString(s, n) {
//   let a = []

//   if (s.length === 1) {
//     s === 'a' ? n : 0
//   }
 
//   while (a.length < n) {
//     for (let i = 0; i < s.length; i++) { 
//       if (a.length < n) a.push(s[i])
//     }
//   }
//   return a.filter(l => l === 'a').length
// }

// *SECOND DRAFT* //

function repeatedString(s, n) {
  const repCount = parseInt(n / s.length)
  const remCount = n % s.length

  const aCount = (str) => {
    return str.split('').filter(l => l === 'a').length
  }

  return repCount * aCount(s) + aCount(s.slice(0, remCount))
}

// let s = 'aba'
// let n = 10
// repeatedString(s, n)



// closed paths /////////////////////////////////////////////

function closedPaths(num) {
  const n = num.toString()
  const cPaths = ['0', '4', '6', '9']
  let count = 0
  
  for (let i = 0; i < n.length; i++) {
    if (cPaths.includes(n[i])) count += 1
    if (n[i] === '8') count += 2
  }
  return count
}

// let n = 1288
// closedPaths(n)



// 2D array (hourglass sum) //////////////////////////////////

function hourglassSum(arr) {
  let sums = []
  let sum

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sum = [
        ...arr[i].slice(j, j + 3),
        arr[i + 1][j + 1],
        ...arr[i + 2].slice(j, j + 3)
      ]
      sums.push(sum.reduce((a, b) => a + b))
    }
  } 
  return Math.max(...sums)
}

// arr = [
//   [1, 1, 1, 0, 0, 0],
//   [0, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0],
//   [0, 0, 2, 4, 4, 0],
//   [0, 0, 0, 2, 0, 0],
//   [0, 0, 1, 2, 4, 0]
// ]
// hourglassSum(arr)



// array: left rotation //////////////////////////////////

// solution 1 (loop)
// function rotLeft(a, d) {
//   for (let i = 0; i < d; i++) {
//     a.push(a.shift())
//   }
//   return a
// }

// solution 2 (slice)
function rotLeft(a, d) {
  return [...a.slice(d), ...a.slice(0, d)]
}

// let a = [1, 2, 3, 4, 5]
// let d = 4
// rotLeft(a, d)



// array: minimum bribes /////////////////////////////////

function minimumBribes(q) {
  let swaps = 0

  for (let i = q.length - 1; i >= 0; i--) {
    let bribes = q[i] - (i + 1)
    let spot = q[i] - 2 > 0 ? q[i] - 2 : 0

    if (bribes > 2) {
      console.log('Too chaotic')
      return
    }

    for (let j = spot; j < i; j++) {
      if (q[j] > q[i]) swaps++
    }
  }

  console.log(swaps)
}

// let q = [2, 1, 5, 3, 4]
// let q = [2, 5, 1, 3, 4]
minimumBribes(q)
