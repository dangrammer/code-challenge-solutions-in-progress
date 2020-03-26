function activityNotifications(debits, days) {
  let notices = 0

  for (let i = days; i < debits.length; i++) {
    const trail = debits.slice(i - days, i).sort((a, b) => a - b)
    const debit = debits[i]
    const median = trail.length % 2 === 0 ? 
      trail[(trail.length / 2) - 1] + trail[(trail.length / 2)] : 
        trail[Math.floor(trail.length / 2)] * 2

    if (debit >= median) notices++
  }

  return notices
}

const days = 5
const debits = [2, 3, 4, 2, 3, 6, 8, 4, 5]
activityNotifications(debits, days)
