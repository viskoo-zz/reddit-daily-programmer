"use strict";

const expect = require("chai").expect;
const script = require("./354_easy");

describe("Testing challenge #354 [Easy] Integer Complexity 1", () => {

    it("Should correctly calculate smallest sum for number 12", () => {
        expect(script.getSmallestSum(12)).to.be.equal(7);
    });
    it("Should correctly calculate smallest sum for number 456", () => {
        expect(script.getSmallestSum(456)).to.be.equal(43);
    });
    it("Should correctly calculate smallest sum for number 4567", () => {
        expect(script.getSmallestSum(4567)).to.be.equal(4568);
    });
    it("Should correctly calculate smallest sum for number 12345", () => {
        expect(script.getSmallestSum(12345)).to.be.equal(838);
    });

    it("Bonus 1: Should correctly calculate smallest sum for number 1234567891011", () => {
        expect(script.getSmallestSum(1234567891011)).to.be.equal(2544788);
    });
});
