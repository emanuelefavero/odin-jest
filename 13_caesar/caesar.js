const caesar = function (string, shift) {
  // - convert string array back to a string
  return string
    .split('')
    .map((char) => shiftChar(char, shift))
    .join('')
}

// - if char code is lower than 97 (a), set char code to 65 (A)
const codeSet = (code) => (code < 97 ? 65 : 97)

// - make the function works with negative numbers thanks to %
const mod = (n, m) => ((n % m) + m) % m

// - shift char by <shift> value
const shiftChar = (char, shift) => {
  const code = char.charCodeAt()

  // - handle code bigger/equal than 65 (A) and lower/equal/90 (Z)
  // or bigger than 97 (a) and lower than 122 (z)
  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    )
  }
  return char
}

// Do not edit below this line
module.exports = caesar
