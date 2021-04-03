// Write your tests here!
const expect = require("chai").expect;
const { substitution } = require("../src/substitution");

describe("Checking basic encode", () => {
  it("should return 'jrufscpw'", () => {
    expect(substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev")).to.equal('jrufscpw');
  });
});

describe("Checking basic decode", () => {
  it("should return 'thinkful'", () => {
    expect(substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false)).to.equal('thinkful');
  });
});

describe("Checking encode with spaces", () => {
  it("should return 'jrufs cpw'", () => {
    expect(substitution("think ful", "xoyqmcgrukswaflnthdjpzibev")).to.equal('jrufs cpw');
  });
});

describe("Checking decode with spaces", () => {
  it("should return 'think ful'", () => {
    expect(substitution("jrufs cpw", false)).to.equal('think ful');
  });
});

describe("Checking encode with nonletter characters in alphabet", () => {
  it("should return 'y&ii$r&'", () => {
    expect(substitution("message", "wae&zrdxtfcygvuhbijnokmpl")).to.equal('y&ii$r&');
  });
});

describe("Checking decode with nonletter characters in alphabet", () => {
  it("should return 'message'", () => {
    expect(substitution("y&ii$r&", "wae&zrdxtfcygvuhbijnokmpl")).to.equal('message');
  });
});

describe("Checking short alphabet", () => {
  it("should return false", () => {
    expect(substitution("thinkful", "bcdefg")).to.equal(false);
  });
});

describe("Checking long alphabet", () => {
  it("should return false", () => {
    expect(substitution("thinkful", "wae&zrdxtfcygvuhbijnokmpl1234")).to.equal(false);
  });
});

describe("Checking repeated characters in alphabet", () => {
  it("should return false", () => {
    expect(substitution("thinkful", "wae&zrdxtfcygvuhbijnokmpa")).to.equal(false);
  });
});
