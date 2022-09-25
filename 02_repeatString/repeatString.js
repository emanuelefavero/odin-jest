const repeatString = function (string, num) {
  if (num < 0) {
    return 'ERROR'
  }
  let newString = ''
  if (string < 0) {
    return (newString = '')
  }
  for (let i = 0; i < num; i++) {
    newString += string
  }
  return newString
}

// Do not edit below this line
module.exports = repeatString
