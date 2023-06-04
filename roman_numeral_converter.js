// Roman numerals are between 1 to 3999.

function convertToRoman(num) {
  if (num <= 0 || num >= 4000) {
    return 'Invalid number. Roman numerals are between 1 to 3999'
  }

  const romanNumerals = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1
  }

  let result = '';

  for (let key in romanNumerals) {
    while (num >= romanNumerals[key]) {
      result += key;
      num -= romanNumerals[key]
    }
  }

  return result;

}

// convertToRoman(5) should return 'V';
// convertToRoman(21) should return 'XXI';
// convertToRoman(99) should return 'XCIX';