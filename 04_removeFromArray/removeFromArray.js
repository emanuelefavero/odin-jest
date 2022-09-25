const removeFromArray = function (...args) {
  const array = args[0]
  const newArray = []
  array.forEach((item) => {
    // Push every element into new array except the ones included in the function arguments
    if (!args.includes(item)) {
      newArray.push(item)
    }
  })
  return newArray
}

// Do not edit below this line
module.exports = removeFromArray
