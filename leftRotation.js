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

let a = [1, 2, 3, 4, 5]
let d = 4
rotLeft(a, d)
