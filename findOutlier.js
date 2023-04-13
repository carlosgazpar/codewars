const findOutlier = (listOfNumbers) =>{
  const evenNumbers = []
  const oddNumbers = []

  listOfNumbers.forEach(number =>{
    if(number % 2 === 0){
      evenNumbers.push(number)
    } else {
      oddNumbers.push(number)
    }
  })

  if(evenNumbers.length > 1){
    return oddNumbers[0]
  } else {
    return evenNumbers[0]
  }
}

findOutlier([160, 3, 1719, 19, 11, 13, -21])
