// const h = [1, 2, 3, 4, 5] // 9
const h = [11, 11, 10, 10, 10] // 50
largestRectangle(h)

function largestRectangle(h) {
  const stack = [[h[0], 0]]
  let max = 0

  for (let i = 1; i < h.length; i++) {
    if (h[i] > h[i - 1]) {
      stack.push([h[i], i])
    } else {
      let idx

      while (stack.length && stack[stack.length - 1][0] > h[i]) {
        const building = stack.pop()
        idx = building[1]
        max = Math.max(max, building[0] * (i - idx))
      }

      stack.push([h[i], idx || i])
    } 
    // console.log(stack)
    // console.log(max)
  }

  // for (let bldg of stack) {
  //   const ht = bldg[0]
  //   const len = h.length - bldg[1]
  //   max = Math.max(max, ht * len)
  // }

  for (let i = 0; i < stack.length; i++) {
    const ht = stack[i][0]
    const len = h.length - i
    max = Math.max(max, ht * len)
  }

  console.log(max)
  return max
}

////////////////////////

// function largestRectangle(h) {
//   const stack = [[h[0], 0]]
//   let max = 0

//   for (let i = 1; i < h.length; i++) {
//     let idx
//     if (h[i] <= h[i - 1]) {
//       while (stack.length && stack[stack.length - 1][0] > h[i]) {
//         const building = stack.pop()
//         idx = building[1]
//         max = Math.max(max, building[0] * (i - idx))
//       }
//     } 
//     stack.push([h[i], idx || i])
//   }

//   for (let i = 0; i < stack.length; i++) {
//     const ht = stack[i][0]
//     const len = h.length - i
//     max = Math.max(max, ht * len)
//   }

//   console.log(max)
//   return max
// }