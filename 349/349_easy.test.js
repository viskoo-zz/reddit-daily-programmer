"use strict";

const expect = require("chai").expect;
const script = require("./349_easy");

describe("Testing challenge #349 [Easy] Change Calculator", () => {

    it("Should correctly calculate change part 1", () => {
        expect(script.findCoins(150, [100, 50, 50, 50, 50]).length).to.be.lessThan(5);
    });
    it("Should correctly calculate change part 2", () => {
        expect(script.findCoins(130, [100, 20, 18, 12, 5, 5]).length).to.be.lessThan(6);
    });
    it("Should correctly calculate change part 3", () => {
        expect(script.findCoins(200, [50, 50, 20, 20, 10])).to.be.equal("It is not possible to return change with available coins");
    });

    it("Should correctly calculate change bonus 1", () => {
        expect(script.findCoins(150, [100, 50, 50, 50, 50]).length).to.be.equal(2);
    });
    it("Should correctly calculate change bonus 2", () => {
        expect(script.findCoins(130, [100, 20, 18, 12, 5, 5]).length).to.be.equal(3);
    });
});