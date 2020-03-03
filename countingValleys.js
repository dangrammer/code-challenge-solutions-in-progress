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

let path = 'DDUUUUDDDDUU'
countingValleys(12, path)
