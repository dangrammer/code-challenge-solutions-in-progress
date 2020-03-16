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

c = [0, 0, 1, 0, 0, 1, 0]
jumpingOnClouds(c)
