const squareDigits = (num) => {
  const numToString = num.toString()
  const listOfNumbers = numToString.split('')
  const squareNumbers = []

  listOfNumbers.forEach(number => {
    const stringToNumber = Number(number)
    const toSquare = Math.pow(stringToNumber, 2)
    squareNumbers.push(toSquare)
  })
  const joinOfSquares = Number(squareNumbers.join(''))
  return joinOfSquares
}

squareDigits(2277665544)