function reverseShuffleMerge(s) {
  let a1
  let a2
  
  a1 = s.slice(0, s.length / 2)
  a2 = s.slice(s.length / 2)
  

  console.log(a1)
  console.log(a2)
}

const s = 'abab'
reverseShuffleMerge(s)