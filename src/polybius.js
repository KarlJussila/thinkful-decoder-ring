// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  //Mapping of chars to their coordinates
  const charsToCoordinate = {
      "a":"11","b":"21","c":"31","d":"41","e":"51","f":"12","g":"22","h":"32","i":"42",
      "j":"42","k":"52","l":"13","m":"23","n":"33","o":"43","p":"53","q":"14",
      "r":"24","s":"34","t":"44","u":"54","v":"15","w":"25","x":"35","y":"45","z":"55"
  };

  function polybius(input, encode = true) {
    //If encoding
    if (encode) {
        //Map the chars to their codes and return the joined string
        return input.split("").map(char => {
            //Lower case so they will map properly
            const lowerChar = char.toLowerCase();
            //If it is in the keys (if it is a letter), return its value
            if (charsToCoordinate.hasOwnProperty(lowerChar)) return charsToCoordinate[lowerChar];
            //Otherwise return the char
            return char;
        }).join("");

    //If decoding
    } else {
        //If the length without whitespace is odd, return false
        if (input.replace(/\s+/g, '').length % 2) return false;

        let result = "";

        //Loop through the input, going two characters at a time
        for (let i = 0; i < input.length; i += 2) {
            //If the character is a space
            if (input[i] === " ") {
                //Decrement i by 1, effectively incementing it
                //by one in the next iteration
                i -= 1;

                //Add a space to the result
                result += " ";

                //Move on to the next iteration
                continue;
            }

            //Loop through the charsToCoordinate object
            for (const [key, value] of Object.entries(charsToCoordinate)) {
                //If the value matches the two characters we are looking at
                if (value === input.slice(i, i+2)) {
                    //If the key is i, in other words, if the value we are looking
                    //for is 42, add "(i/j)" to the result and break
                    if (key === "i") {
                        result += "(i/j)";
                        break;
                    }
                    //Otherwise add the correct key to the result and break
                    result += key;
                    break;
                }
            }
        }

        return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
