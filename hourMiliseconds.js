const hourMiliseconds = (hours, minutes, seconds) => {
const milisecondsInHour = 3600000
const milisecondsInMinute = 60000
const milisecondsInSecond = 1000
let totalMiliseconds = 0

totalMiliseconds += milisecondsInHour * hours
totalMiliseconds += milisecondsInMinute * minutes
totalMiliseconds += milisecondsInSecond * seconds
return totalMiliseconds
}

hourMiliseconds(0, 1, 1)