// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  function caesar(input, shift, encode = true) {
    // your solution code here
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false;

    return encodeOrDecode(input, shift, encode);
  }

  return {
    caesar,
  };

// Helper function: to check if a letter is alphabetic.
// If the lowercase form equals to the uppercase form, it was a non-letter. Otherwise it was a letter.
  function isAlphabetic(char) {
    if ((char >= 'A' && char <= "Z") ||
        (char >= 'a' && char <= "z")) return true;
    
    return false;
  }
  
  // Helper function: encode or decode a message.
  function encodeOrDecode(input, shift, encode) {
  
    let result = [];
  
    for (let i = 0; i < input.length; i++) {
      // Maintain space and non-alphabetic symbols. 
      if (!isAlphabetic(input[i])) {
  
        result.push(input[i]);
  
      } else {
        // Calculate the index after right or left shifting.
        const ix = alphabets.indexOf(input[i].toLowerCase());
        let ixShifted = 0;
  
        if (encode) {
          ixShifted = ix + shift;
          // Wrap around the letter to the front of the alphabet when it goes off after right shifting.
          if (ix + shift >= 26) ixShifted %= 26;
          // Wrap around the letter to the end of the alphabet when it goes off after left shifting.
          if (ix + shift < 0) ixShifted += 26;
        } else {
          // Shift in the opposite direction.
          ixShifted = ix - shift;
          
          // Wrap around the letter to the front of the alphabet when it goes off after right shifting.
          if (ix - shift >= 26) ixShifted %= 26;
          // Wrap around the letter to the end of the alphabet when it goes off after left shifting.
          if (ix - shift < 0) ixShifted += 26;
        }
        
        result.push(alphabets[ixShifted]);
  
      }
    }
  
    return result.join('');
  }
})();



module.exports = { caesar: caesarModule.caesar };
