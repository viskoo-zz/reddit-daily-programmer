"use strict";

const expect = require("chai").expect;
const script = require("./352_easy");

describe("Testing challenge #352 [Easy] Making Imgur-style Links", () => {

    it("Should correctly encode number 15674 to base62", () => {
        expect(script.base62Encode(15674)).to.be.equal("44O");
    });
    /*it("Should correctly encode number 7026425611433322325 to base62", () => {
        expect(script.base62Encode(7026425611433322325)).to.be.equal("8n36rbfRcDb");
    });*/
    it("Should correctly encode number 187621 to base62", () => {
        expect(script.base62Encode(187621)).to.be.equal("MO9");
    });
    it("Should correctly encode number 237860461 to base62", () => {
        expect(script.base62Encode(237860461)).to.be.equal("g62n3");
    });
    it("Should correctly encode number 2187521 to base62", () => {
        expect(script.base62Encode(2187521)).to.be.equal("9b4B");
    });
    it("Should correctly encode number 18752 to base62", () => {
        expect(script.base62Encode(18752)).to.be.equal("4Ss");
    });
});