// Write your tests here!
const expect = require("chai").expect;
const { polybius } = require("../src/polybius");

describe("Checking basic encode", () => {
  it("should return '11213141'", () => {
    expect(polybus("abcd")).to.equal('11213141');
  });
});

describe("Checking basic decode", () => {
  it("should return 'abcd'", () => {
    expect(polybius("11213141", false)).to.equal('abcd');
  });
});

describe("Checking encode with spaces", () => {
  it("should return '3251131343 2543241341'", () => {
    expect(polybius("Hello world", false)).to.equal('3251131343 2543241341');
  });
});

describe("Checking decode with spaces", () => {
  it("should return 'hello world'", () => {
    expect(polybius("3251131343 2543241341", false)).to.equal('hello world');
  });
});

describe("Checking decode with i/j", () => {
  it("should return 'th(i/j)nkful'", () => {
    expect(polybius("4432423352125413")).to.equal('th(i/j)nkful');
  });
});
