// Function 1: `calculateTax`

function calculateTax(amount) {
  return amount * 0.10;
}

// Function 2: `convertToUpperCase`

function convertToUpperCase(text) {
  return text.toUpperCase();
}

// Function 3: `findMaximum`

function findMaximum(num1, num2) {
  return num1 > num2 ? num1 : num2;
}

// Function 4: `isPalindrome`

function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

// Function 5: `calculateDiscountedPrice`

function calculateDiscountedPrice(originalPrice, discountPercentage) {
  return originalPrice * (1 - discountPercentage / 100);
}

// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };