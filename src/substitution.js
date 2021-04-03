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
            return input.split("").map(char => {
                //Lower case to get rid of capitals
                const lowerChar = char.toLowerCase();

                //If the character is
                if (charsToIndex.hasOwnProperty(lowerChar)) {
                    return alphabet[charsToIndex[lowerChar]];
                }
                return char;
            }).join("");
        } else {
            return input.split("").map(inputChar => {
                let index = -1;
                alphabet.split("").forEach((char, i) => {
                    if (char === inputChar) index = i;
                });
                if (index != -1) return chars[index];
                return inputChar;
            }).join("");
        }
    }

    return {
        substitution,
    };
})();

module.exports = { substitution: substitutionModule.substitution };
