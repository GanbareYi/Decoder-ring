// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const standardAlphabets = "abcdefghijklmnopqrstuvwxyz";

  function substitution(input, alphabet, encode = true) {
    // your solution code here

    // Error handling
    if (!isValidSubAlphabet(alphabet)) return false;

    let result = [];
    if (encode) {
      // Encoding a message
      for (let i = 0; i < input.length; i ++) {
        // Leave space as is
        if (input[i] === " ") { 
          result.push(" ");
          continue;
        }

        const ix = standardAlphabets.indexOf(input[i].toLowerCase());
        result.push(alphabet[ix]);
      }
    } else {
      // Decoding a message
      for (let i = 0; i < input.length; i++) {
        // Leave space as is
        if (input[i] === " ") { 
          result.push(" ");
          continue;
        }

        const ix = alphabet.indexOf(input[i].toLowerCase());
        result.push(standardAlphabets[ix]);

      }
    }

    return result.join("");
  }

  return {
    substitution,
  };
})();

// Helper function: to check: 1. if substition alphabet is missing
//                            2. if the length of substition alphabet is shorter than 26
//                            3. if there is duplicate in substition alphabet
function isValidSubAlphabet(alphabet) {
  if (alphabet === null || alphabet === undefined) return false;
    if (alphabet.length !== 26) return false;

    let alphabetArray = [];

    // Check if substition string has duplicate letters
    for (let i = 0; i < 26; i++) {
      if (!alphabetArray.includes(alphabet.charAt(i))) {
        // If `alphabetArray` doesn't contain the letter, add it to the array.
        alphabetArray.push(alphabet.charAt(i));
      } else {
        // If a letter is already in `alphabetArray`, meaning there's a duplicate of this letter,
        // then return false
        return false;
      }
    }

    return true;
}

module.exports = { substitution: substitutionModule.substitution };
