// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
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

  function caesar(input, shift, encode = true) {
    //If the shift value is invalid, return false
    if (!shift || shift > 25 || shift < -25) return false;

    //Loop through the string and map characters to the
    //shifted value. Then join the returned array back into a string
    const result = input.split("").map(char => {
        //Lowercase if capital
        const lowerChar = char.toLowerCase();

        //If it is not a lowercase char, ignore it
        if (!charsToIndex.hasOwnProperty(lowerChar)) return char;

        //Get index of original char
        const originalIndex = charsToIndex[lowerChar];

        //Shift right if encode is true, or left otherwise
        let newIndex = encode ? originalIndex + shift : originalIndex - shift;

        //Shift up 27 indices if the new index is negative,
        //to get it back to the right range
        if (newIndex < 0) newIndex += 26;

        //Additionally, use the modulus operator to correct
        //any right side overflow
        newIndex %= 26;

        return chars[newIndex];
    }).join("");

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
