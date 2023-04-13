const highAndLow = (numbers) => {
  const listOfNumbers = numbers.split(' ')
  const listStringToNumber = listOfNumbers.map(number => Number(number))
  listStringToNumber.sort((prevNumber, currentNumber)=> prevNumber - currentNumber)
  const highestAndLowest = `${listStringToNumber[listStringToNumber.length - 1]} ${listStringToNumber[0]}`
  return highestAndLowest
}


highAndLow("1 20 -3 4 5")