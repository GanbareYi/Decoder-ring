// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const polybiusSquare = [['A', 'B', 'C', 'D', 'E'],
                          ['F', 'G', 'H', 'I/J', 'K'],
                          ['L', 'M', 'N', 'O', 'P'],
                          ['Q', 'R', 'S', 'T', 'U'],
                          ['V', 'W', 'X', 'Y', 'Z']
                        ];

  function polybius(input, encode = true) {
    // your solution code here
    let result = [];
    if (encode) {
      for (let i = 0; i < input.length; i++) {
        const char = input[i].toUpperCase();

        // Leave space as is.
        if (char === " ") {
          result.push(char);
          continue;
        }

        let coordinates;
        if (char === "I" || char === "J") {
          coordinates = convert("I/J");
        }else {
          coordinates = convert(char);
        }

        result.push(coordinates);
      }
    }

    if (!encode) {
      let isSpace = false;
      for (let i = 0; i < input.length; isSpace ? i++ : i += 2) {
        // Leave spaces as is
        if (input[i] === " ") {
          isSpace = true;
          result.push(input[i]);
          continue;
        } else {
          isSpace = false;
        }

        // If the number of characters in the string excluding spaces 
        // is not even, return false.
        if (i === input.length - 1) return false;

        const col = input[i] - 1, row = input[i + 1] - 1;
        const letters = polybiusSquare[row][col];

        if (letters.toLowerCase() === "i/j") {
          result.push(`(${letters.toLowerCase()})`);
        } else {
          result.push(letters.toLowerCase());
        }
      }
    }

    return result.join('');
  }

  return {
    polybius,
  };

  // Helper Function: converting letters into coordinates.
  function convert(input) {
    let topIx = null, leftIx = null;

    for (i = 0; i < polybiusSquare.length; i++) {
      if (polybiusSquare[i].includes(input)) {
        topIx = polybiusSquare[i].indexOf(input);
        leftIx = i;
        break;
      }
    }

    return `${topIx + 1}${leftIx + 1}`;
  }
})();

module.exports = { polybius: polybiusModule.polybius };
