const alphabetPosition = (text) => {
  const listOfLetters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const regex = /\W|\d|[_]/g
  const regexMatch = text.replaceAll(regex, '')
  const splitLetters = regexMatch.toLowerCase().split('')
  const lettersPosition = splitLetters.map(letter => {
    return listOfLetters.findIndex(element => element === letter)
  })
  return lettersPosition.join(' ')
}


alphabetPosition("The sunset sets at t08080welve o' clock.")