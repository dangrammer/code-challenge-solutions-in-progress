const a = 'daBcd'
const b = 'ABC'
// // YES
// const a = 'AbCdE'
// const b = 'AFE'
// NO
// const a = 'AfPZN'
// const b = 'APZNC'
// NO
// const a = 'KXzQ'
// const b = 'K'
// NO
// const a = 'KXz'
// const b = 'KXZQ'
// NO
abbreviation(a, b)

////////// *** FIFTH DRAFT *** //////////

function abbreviation(a, b) {
 console.log(a, b)
 const lowCase = (a, b) => a === b.toLowerCase()

 if (a.length < b.length) {
   console.log('NO: a string shorter than b string')
 }

 if (!b.length) {
   for (const c of a) {
     if (!lowCase(c)) {
       console.log('NO: remaining uppercase chars in a')
     }
   }
   console.log('YES')
   return 'YES'
 }
 if (a[0] === b[0]) abbreviation(a.slice(1), b.slice(1))
 if (lowCase(a, b)) abbreviation(a.slice(1), b.slice(1))
 if (lowCase(a, a)) abbreviation(a.slice(1), b)
 
 if (a[0] !== b[0]) {
   console.log('NO: a char and b char both uppercase and unequal')
   return 'NO'
 }
}


////////// *** FOURTH DRAFT *** //////////

// function abbreviation(a, b) {
//   console.log('a =>', a)
//   console.log('b =>', b)
//   const len = a.length
//   const lowCase = (a, b) => a[0] === b[0].toLowerCase()

//   while (a.length && b.length) {
//     if (a[0] === b[0] || lowCase(a, b)) {
//       a = a.slice(1)
//       b = b.slice(1)
//     } 
//     else if (lowCase(a, a)) a = a.slice(1)
//     else if (a[0] !== b[0]) {
//       console.log('NO')
//       return 'NO'
//     }
//   }

//   if (b.length) {
//     console.log('NO')
//     return 'NO'
//   }

//   if (a.length) {
//     for (const c of a) {
//       if (!lowCase(a, a)) {
//         console.log('NO bang')
//         return 'NO'
//       }
//     }
//   }

//   console.log('after while loop')
//   console.log('a =>', a)
//   console.log('b =>', b)

//   console.log('YES')
//   return 'YES'
// }


////////// *** THIRD DRAFT *** //////////

// function abbreviation(a, b) {
//   const len = a.length
//   const lowCase = (a, b) => a[0] === b[0].toLowerCase()

//   for (let i = 0; i < len; i++) {
//     if (!b.length) {
//       if (a.length && lowCase(a, a)) a = a.slice(1)
//       if (a.length && !lowCase(a, a)) {
//         console.log('NO')
//         return 'NO'
//       }
//     }

//     if (b.length) {
//       if (a[0] === b[0] || lowCase(a, b)) {
//         a = a.slice(1)
//         b = b.slice(1)
//       } 
//       else if (lowCase(a, a)) a = a.slice(1)
//       else if (a[0] !== b[0]) {
//         console.log('NO')
//         return 'NO'
//       }
//     }
//     console.log(a)
//     console.log(b)
//     console.log('')
//   }

//   console.log('final')
//   console.log('a', a)
//   console.log('b', b)

//   if (b.length) {
//     console.log('NO')
//     return 'NO'
//   }

//   console.log('YES')
//   return 'YES'
// }


////////// *** SECOND DRAFT *** //////////

// function abbreviation(a, b) {
//   const len = a.length
//   const lowCase = (a, b) => a[0] === b[0].toLowerCase()

//   for (let i = 0; i < len; i++) {
//     if (!b.length && lowCase(a, a)) a = a.slice(1)
//     if (b.length) {
//       if (a[0] === b[0] || lowCase(a, b)) {
//         a = a.slice(1)
//         b = b.slice(1)
//       } else if (lowCase(a, a)) {
//         a = a.slice(1)
//       } else if (a[0] !== b[0]) {
//         console.log('NO')
//         return
//       }
//       console.log(a)
//       console.log(b)
//       console.log('')
//     }
//   }
//   console.log('YES')
//   return
// }


////////// *** FIRST DRAFT *** //////////

// function abbreviation(a, b) {
//   const len = a.length

//   for (let i = 0; i < len; i++) {
//     if (!b.length && a[0] === a[0].toLowerCase()) {
//       a = a.slice(0)
//     } else {
//       if (a[0] === b[0] || a[0] === b[0].toLowerCase()) {
//         a = a.slice(1)
//         b = b.slice(1)
//       } else if (a[0] === a[0].toLowerCase()) {
//         a = a.slice(1)
//       } else if (a[0] !== b[0]) {
//         console.log('NO')
//         return
//       }
//       console.log(a)
//       console.log(b)
//       console.log('')
//     }
//   }
//   console.log('YES')
//   return
// }
