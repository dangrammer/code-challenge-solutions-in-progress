function whatFlavors(cost, money) {
  const hash = {}

  for (let i = 0; i < cost.length; i++) {
    hash[cost[i]] ? 
      hash[cost[i]].push(i + 1) : 
        hash[cost[i]] = [i + 1]
  }
 
  for (let c of cost) {
    if (hash[money - c]) {
      if (c === money - c) {
        if (hash[c].length > 1) {
          console.log(hash[c][0], hash[c][1])
          return
        } 
      } else {
        console.log(hash[c][0], hash[money - c][0])
        return
      }
    }
  }
}

// const money = 4
// const cost = [1, 4, 5, 3, 2] // 1 4
// const money = 4
// const cost = [2, 2, 4, 3] // 1 2
const money = 8
const cost = [4, 3, 2, 5, 7] // 2 4
whatFlavors(cost, money)
