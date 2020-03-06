function checkMagazine(magazine, note) {
  const magHash = {}

  for (let i = 0; i < magazine.length; i++) {
    let word = magazine[i]
    magHash[word] ? magHash[word] += 1 : magHash[word] = 1
  }

  for (let i = 0; i < note.length; i++) {
    let word = note[i]
    if (!magHash[word] || magHash[word] < 1) {
      console.log('No')
      return
    } else {
      magHash[word] -= 1
    }
  }

  console.log('Yes')
}

let magazine = ['give', 'me', 'one', 'grand', 'today', 'night']
let note = ['give', 'one', 'grand', 'today']

// let magazine = ['two', 'times', 'three', 'is', 'not', 'four']
// let note = ['two', 'times', 'two', 'is', 'four']

checkMagazine(magazine, note)
