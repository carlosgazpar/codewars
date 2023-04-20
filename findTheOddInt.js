const findOdd = (listOfNumbers) => {
const repeatingNumbers = {}

listOfNumbers.map(number => {
  repeatingNumbers[number] ??= 0
  repeatingNumbers[number]++
})

for (const key in repeatingNumbers) {
  if(repeatingNumbers[key] % 2 !== 0) return Number(key)
}
}


console.log(findOdd([1,2,3,4,5,1,2,3,4,5, 8, 7]))