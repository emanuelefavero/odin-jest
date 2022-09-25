const fibonacci = function (n) {
  let nConverted = Number(n)
  if (nConverted < 0) return 'OOPS'
  return nConverted < 1
    ? 0
    : nConverted <= 2
    ? 1
    : fibonacci(nConverted - 1) + fibonacci(nConverted - 2)
}

// Do not edit below this line
module.exports = fibonacci
