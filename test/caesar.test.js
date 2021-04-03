// Write your tests here!
const expect = require("chai").expect;
const { caesar } = require("../src/caesar");

describe("Checking valid positive shift", () => {
  it("should return 'wklqnixo'", () => {
    expect(caesar("thinkful", 3)).to.equal('wklqnixo');
  });
});

describe("Checking valid negative shift", () => {
  it("should return 'qefkhcri'", () => {
    expect(caesar("thinkful", -3)).to.equal('qefkhcri');
  });
});

describe("Checking valid left overflow", () => {
  it("should return 'xyza'", () => {
    expect(caesar("abcd", -3)).to.equal('xyza');
  });
});

describe("Checking valid right overflow", () => {
  it("should return 'zabc'", () => {
    expect(caesar("wxyz", 3)).to.equal('zabc');
  });
});

describe("Checking basic decode", () => {
  it("should return 'thinkful'", () => {
    expect(caesar("wklqnixo", 3, false)).to.equal('thinkful');
  });
});

describe("Checking encoding chars that shouldn't shift", () => {
  it("should return 'bpqa qa i amkzmb umaaiom!'", () => {
    expect(caesar("this is a secret message!", 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });
});

describe("Checking decoding chars that shouldn't shift", () => {
  it("should return 'this is a secret message!'", () => {
    expect(caesar("bpqa qa i amkzmb umaaiom!", 8, false)).to.equal('this is a secret message!');
  });
});

describe("Checking capital chars", () => {
  it("should return 'bpqa qa i amkzmb umaaiom!'", () => {
    expect(caesar("THIS IS A SECRET message!", 8)).to.equal('bpqa qa i amkzmb umaaiom!');
  });
});

describe("Checking invalid positive shift", () => {
  it("should return false", () => {
    expect(caesar("THIS IS A SECRET message!", 30)).to.equal(false);
  });
});

describe("Checking invalid negative shift", () => {
  it("should return false", () => {
    expect(caesar("THIS IS A SECRET message!", -1)).to.equal(false);
  });
});

describe("Checking invalid zero shift", () => {
  it("should return false", () => {
    expect(caesar("THIS IS A SECRET message!", 0)).to.equal(false);
  });
});

describe("Checking no shift", () => {
  it("should return false", () => {
    expect(caesar("THIS IS A SECRET message!")).to.equal(false);
  });
});
