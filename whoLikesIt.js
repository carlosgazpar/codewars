const likes = (listOfNames) => {
const listLength = listOfNames.length
let message

  switch(listLength){
    case 0:
      message = "no one likes this"
      break
    case 1:
      message = `${listOfNames[0]} likes this`
      break
    case 2:
      message = `${listOfNames[0]} and ${listOfNames[1]} like this`
      break
    case 3:
      message = `${listOfNames[0]}, ${listOfNames[1]} and ${listOfNames[2]} like this`  
      break
    default:
      const leftNames = listLength - 2
      message = `${listOfNames[0]}, ${listOfNames[1]} and ${leftNames} others like this`
      break
  }
  return message
}

// const likes = (listOfNames) => {
//   const listLength = listOfNames.length
  
//     switch(listLength){
//       case 0: return "no one likes this"
//       case 1: return `${listOfNames[0]} likes this`
//       case 2: return `${listOfNames[0]} and ${listOfNames[1]} like this`
//       case 3: return `${listOfNames[0]}, ${listOfNames[1]} and ${listOfNames[2]} like this`  
//       default:
//         const leftNames = listLength - 2
//         return `${listOfNames[0]}, ${listOfNames[1]} and ${leftNames} others like this`
//     }
//   }

likes(['juan', 'pedro', 'david', 'pablo', 'cesar'])