function validatePIN (pin) {
  const lengthPin = pin?.length
  const isNumber = pin.match(/\D/g)
  if(isNumber?.length > 0 || lengthPin < 4 || lengthPin > 6  || lengthPin === 5) return false
  return true
}