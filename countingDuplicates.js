const duplicateCount = (text) => {
  const lowerCaseText = text.toLowerCase()
  const listOfLetters = lowerCaseText.split('')
  const countOfLetters = {}
  let countOfDuplicates = 0

  listOfLetters.forEach(letter => {
    countOfLetters[letter] ??= 0
    countOfLetters[letter] ++
    
  })

  Object.entries(countOfLetters).forEach(([key, value]) => {
    if(value > 1) countOfDuplicates++
  })
  return countOfDuplicates
}

duplicateCount('hhhaAAa0987666')