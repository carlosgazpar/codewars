function toCamelCase(str){
  const str2 = str.split(/[-_]/g)
  const str5 = str2.map((word, index) => {
    if(index === 0) return word
  return word.charAt(0).toUpperCase() + word.slice(1)
  })
  return str5.join('')
}