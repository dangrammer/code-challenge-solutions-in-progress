// const N = 2147483647 // 2147483648
// const N = 1 // 4294967294
// const N = 0 // 4294967295
const N = 123456 // 4294843839
flippingBits(N)


////////// *** FIFTH DRAFT *** //////////
// *working solution

const flippingBits = n => ~n >>> 0


////////// *** FOURTH DRAFT *** //////////
// *working solution

// function flippingBits(N) {
//   let lowBin = N.toString(2)
//   let highBin = ''

//   while (lowBin.length < 32) {
//     lowBin = 0 + lowBin
//   }

//   for (let i = 0; i < lowBin.length; i++) {
//     highBin += lowBin[i] === '0' ? '1' : '0'
//   }

//   return parseInt(highBin, 2)
// }


////////// *** THIRD DRAFT *** //////////
// *working solution

// function flippingBits(N) {
//   let lowBin = ''  // lowBin = binary starting from low order bit
//   let highBin = '' // highBin = binary starting from high order bit
  
//   while (N >= 1) {
//     let rem = N % 2
//     lowBin += rem
//     rem === 1 ?
//       N = Math.floor(N / 2) :
//         N /= 2
//   }

//   while (lowBin.length < 32) {
//     lowBin += 0
//   }

//   for (let i = 31; i >= 0; i--) {
//     highBin += lowBin[i] === '0' ? '1' : '0'
//   }
  
//   return parseInt(highBin, 2)
// }


////////// *** SECOND DRAFT *** //////////
// *working solution

// function flippingBits(N) {
//   let binary = ''
//   let num = ''
//   let result = 0

//   while (N >= 1) {
//     const rem = N % 2
//     binary += rem
//     rem === 1 ?
//       N = Math.floor(N / 2) :
//         N /= 2
//   }

//   while (binary.length < 32) {
//     binary += 0
//   }

//   for (let i = binary.length - 1; i >= 0; i--) {
//     num += binary[i] === '0' ? '1' : '0'
//   }
//   console.log(binary)
//   console.log(num)

//   for (let i = 0; i < num.length; i++) {
//     const expo = num.length - 1 - i
//     result += num[i] * (2 ** expo)
//   }
  
//   console.log(result)
//   return result
// }


////////// *** FIRST DRAFT *** //////////

// function flippingBits(N) {
//   let binary = ''
  
//   while (N >= 1) {
//     let rem = N % 2
//     binary += rem
//     rem === 1 ?
//       N = Math.floor(N / 2) :
//         N /= 2
//   }

//   while (binary.length < 32) {
//     binary += 0
//   }
  
//   console.log(revFlip(binary))
//   return revFlip(binary)
// }

// function revFlip(str) {
//   let num = ''
  
//   for (let i = str.length - 1; i >= 0; i--) {
//     num += str[i] === '0' ? '1' : '0'
//   }

//   return parseInt(num, 2)
// }
