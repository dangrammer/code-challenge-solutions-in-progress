// const arr = [3, 5, 4, 7, 6, 2] // 7 6 4 4 3 2
// const arr = [11, 2, 3, 14, 5, 2, 11, 12] // 14 11 3 2 2 2 2 2
const arr = [3, 5, 4, 7, 6, 2] // 7 6 4 4 3 2
// const arr = [1, 2, 3, 4] // 4 3 2 1
riddle(arr)


////////// *** FOURTH DRAFT *** //////////

function riddle(arr) {
  const wMaxes = {}
  const wInver = {}
  const stack = []
  const maxima = []

  arr.push(0)

  for (let i = 0; i < arr.length; i++) {
    let idx = i

    while (stack.length && stack[stack.length - 1][0] >= arr[i]) {
      let [val,prevIdx] = stack.pop()
      wMaxes[arr[i]] = Math.max(wMaxes[arr[i]] || 0, i - prevIdx + 1)
      wMaxes[val] = Math.max(wMaxes[val] || 0, i - prevIdx)
      idx = prevIdx
    }

    stack.push([arr[i], idx])
  }

  delete wMaxes['0']

  for (let k in wMaxes) {
    wInver[wMaxes[k]] = Math.max(wInver[wMaxes[k]] || 0, k)
  }  

  maxima.push(wInver[arr.length - 1])                         
  
  for (let i = arr.length - 2; i > 0; i--) {
    if (!wInver[i] || wInver[i] < maxima[maxima.length - 1]) {
      maxima.push(maxima[maxima.length - 1])
    } else {
      maxima.push(wInver[i])
    } 
  }    
  
  const result = maxima.reverse()
    
  console.log(result)
  return result                 
}
   

////////// *** THIRD DRAFT *** //////////

// function riddle(arr) {
//   let windowSize = 1
//   const maxima = []
  
//   while (windowSize <= arr.length) {
//     const minima = []
      
//     for (let i = 0; i <= arr.length - windowSize; i++) {
//       const window = []
//       let endIdx = 0

//       while (endIdx < windowSize) {
//         window.push(arr[i + endIdx])
//         endIdx++
//       }

//       minima.push(Math.min(...window))
//     } 

//     maxima.push(Math.max(...minima))
//     windowSize++
//   }
      
//   console.log(maxima)
//   return maxima
// }


////////// *** SECOND DRAFT *** //////////

// function riddle(arr) {
//   let maxs = []
  
//   for (let i = 1; i <= arr.length; i++) {
//     let queue = []
//     let mins = []

//     for (let j = 0; j < i; j++) {
//       queue.push(arr[j])
//     }

//     let next = i

//     for (let k = 0; k <= arr.length - i; k++) {
//       mins.push(Math.min(...queue))
//       queue.shift()
//       queue.push(arr[next])
//       next++
//     }

//     maxs.push(Math.max(...mins))
//   }

//   console.log(maxs)
//   return maxs
// }


////////// *** FIRST DRAFT *** //////////

// function riddle(arr) {
//   let maxs = []
  
//   for (let i = 1; i <= arr.length; i++) {
//     let windowLength = i
//     let mins = []

//     for (let j = 0; j <= arr.length - i; j++) {
//       let startIdx = j
//       let endIdx = startIdx + windowLength
//       let min = 10 ** 9

//       for (let k = startIdx; k < endIdx; k++) {
//         min = Math.min(min, arr[k])
//       }
//       mins.push(min)
      
//     }
//     maxs.push(Math.max(...mins))
//   }

//   console.log(maxs)
//   return maxs
// }


/////////////// process log ///////////////

// function riddle(arr) {
//   console.log('arr input')
//   console.log(arr)
//   console.log('')
//   const wMaxes = {}
//   const wInver = {}
//   const stack = []
//   const maxima = []

//   arr.push(0)
//   console.log('add 0 to end of arr')
//   console.log(arr)
//   console.log('______________________________________________________________')

//   console.log('first for loop: build window maxes map')
//   for (let i = 0; i < arr.length; i++) {
//   console.log(`  loop #${i + 1}`)  
//   console.log(`    current element, index: ${arr[i]}, ${i}`)
//   console.log('    stack: ',stack)
//     let idx = i
//   console.log(stack.length ? stack[stack.length - 1][0] < arr[i] ? `    element on top of stack(${stack[stack.length - 1][0]}) is < current element(${arr[i]})` : '' : '    stack empty')    

//     while (stack.length && stack[stack.length - 1][0] >= arr[i]) {
//   console.log('      while loop')    
//   console.log(`        element on top of stack (${stack[stack.length - 1][0]}) is >= current element: ${arr[i]}`)  
//   let [val, prevIdx] = stack.pop()
//   console.log(`        stack.pop(): [ ${val}, ${prevIdx} ]`)  
//   console.log('          load window maxes map') 
//   console.log(`            build or update key:value with curEl(${arr[i]}) as key`)
//   console.log(`            set value to max of ${wMaxes[arr[i]] ? `existing key(${wMaxes[arr[i]]})` : '[no key](0)'} or [index - last index + 1](${i - prevIdx + 1})`)
//   wMaxes[arr[i]] = Math.max(wMaxes[arr[i]] || 0, i - prevIdx + 1)
//   console.log('              wMaxes:', wMaxes) 
//   console.log(`            build or update key:value with prevEl(${val}) as key`)
//   console.log(`            set value to max of ${wMaxes[val] ? `existing key(${wMaxes[val]})` : '[no key](0)'} or [index - last index](${i - prevIdx})`)
//   wMaxes[val] = Math.max(wMaxes[val] || 0, i - prevIdx)
//   console.log('              wMaxes:', wMaxes)   
//   console.log(`        change curIdx from ${idx} to ${prevIdx}`)    
//       idx = prevIdx
//   console.log('')    
//     }
//   console.log(`    push [${arr[i]}, ${idx}] on top of stack`)
//     stack.push([arr[i], idx])
//   console.log('    stack:',stack)  
//   console.log('')
//   }
//   console.log('______________________________________________________________')
//   console.log('window maxes map (wMaxes)')
//   console.log(wMaxes)
//   console.log('')

//   console.log('remove 0 key from wMaxes')
//   delete wMaxes['0']
//   console.log(wMaxes)
//   console.log('______________________________________________________________')

//   console.log('second for loop: create inverted window maxes map')
//   for (let i in wMaxes) {
//   console.log('  current key:',i)
//   console.log(`  add key(wMaxes[${i}]) to wInver: ${wMaxes[i]}`)
//   console.log(`  set value for wInver key(${wMaxes[i]}) to the greater of:`)
//   console.log(`    [wInver[wMaxes[${i}]] || 0](${wInver[wMaxes[i]] || 0}) & current key(${i})`)
//     wInver[wMaxes[i]] = Math.max(wInver[wMaxes[i]] || 0, i)
//   console.log(' ',wInver) 
//   console.log('') 
//   }  
//   console.log('______________________________________________________________')
//   console.log('inverted window maxes map (wInver)')
//   console.log(wInver)
//   console.log('')

//   console.log(`load maxima arr with value from wInver[${arr.length - 1}(last index of input arr)]`)
//   maxima.push(wInver[arr.length - 1])   
//   console.log(maxima) 
//   console.log('______________________________________________________________')                    
  
//   console.log('third for loop: create maxima arr')
//   for (let i = arr.length - 2; i > 0; i--) {
//     if (!wInver[i] || wInver[i] < maxima[maxima.length - 1]) {
//   console.log(wInver[i] ? `   the value of wInver[${i}](${wInver[i]}) is < the last element of maxima(${maxima[maxima.length - 1]})` : `  wInver has no key of ${i}`, 'so repeat last element')    
//       maxima.push(maxima[maxima.length - 1])
//   console.log(' ',maxima)    
//     } else {
//   console.log(`  the value of wInver[${i}](${wInver[i]}) is >= the last element of maxima(${maxima[maxima.length - 1]}) so add new value`)    
//       maxima.push(wInver[i])
//   console.log(' ',maxima)    
//     } 
//   console.log('')
//   }    
//   console.log('______________________________________________________________')
//   console.log('reverse the maxima arr and assign it to result arr')
//   const result = maxima.reverse()
    
//   console.log('print result arr')
//   console.log(result)
//   return result                 
// }