// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
    // you can add any code you want within this function scope
    const chars = [
        "a","b","c","d","e","f","g","h","i",
        "j","k","l","m","n","o","p","q",
        "r","s","t","u","v","w","x","y","z"
    ];
    const charsToIndex = {
        "a":0,"b":1,"c":2,"d":3,"e":4,"f":5,"g":6,"h":7,"i":8,
        "j":9,"k":10,"l":11,"m":12,"n":13,"o":14,"p":15,"q":16,
        "r":17,"s":18,"t":19,"u":20,"v":21,"w":22,"x":23,"y":24,"z":25
    };

    function substitution(input, alphabet, encode = true) {
        //Return false if the alphabet is not 26 unique characters
        if ((new Set(alphabet)).size !== 26) return false;

        //If encoding
        if (encode) {
            //Map the input chars to their counterparts in the input alphabet
            //and return result joined back into a string
            const result = input.split("").map(char => {
                //Lower case to get rid of capitals
                const lowerChar = char.toLowerCase();

                //If the character is a letter
                if (charsToIndex.hasOwnProperty(lowerChar)) {
                    //Return the letter at the same index in the input alphabet
                    return alphabet[charsToIndex[lowerChar]];
                }
                //Otherwise, return the original character
                return char;
            }).join("");
            return result;
        //If decoding
        } else {
            //Map the input chars to their counterparts in the normal alphabet
            //and return the result joined back into a string
            const result = input.split("").map(inputChar => {
                //Try to find the character in the input alphabet
                let index = -1;
                alphabet.split("").forEach((char, i) => {
                    //If found, save its index
                    if (char === inputChar) index = i;
                });
                //Return the character at the corresponding index in the normal alphabet
                //if the character was found in the input alphabet
                if (index != -1) return chars[index];

                //Otherwise, return the original char
                return inputChar;
            }).join("");
            return result;
        }
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };
