// Write your tests here!
const { caesar }= require("../src/caesar");
const expect = require("chai").expect;

describe("caesar() tests written by Yi: ", () => {
    describe("Error Handling: ", () => {
        it("should return false if shift is not present:", () => {
            const actual = caesar("Caesar Shift", undefined, true);
            expect(actual).to.be.false;
        });

        it("shoulde return false if shift is 0:", () => {
            const actual = caesar("Caesar Shift", 0, false);
            expect(actual).to.be.false;
        });

        it("should return false if shift is greater than 25:", () => {
            const actual = caesar("Caesar Shift", 27, false);
            expect(actual).to.be.false;
        });

        it("should return false if shift is less than -25:", () => {
            const actual = caesar("Caesar Shift", -27, true);
            expect(actual).to.be.false;
        });
    });

    describe("Encoding messages: ", () => {
        it("should encode the message by shifting to the right, ", () => {
            const actual = caesar("rightshift", 5, true);
            const expected = "wnlmyxmnky";

            expect(actual).to.equal(expected);
        });

        it("should encode the message by shifting to the left, ", () => {
            const actual = caesar("leftshift", -5, true);
            const expected = "gzaoncdao";

            expect(actual).to.equal(expected);
        });

        it("should maintain space and other non-letter symbols: ", () => {
            const actual = caesar("hey everyone!", 3, true);
            const expected = "khb hyhubrqh!";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters: ", () => {
            const actual = caesar("Shi Ni VIOLIN", 6, true);
            const expected = "yno to bourot";

            expect(actual).to.equal(expected);
        });

        it("should approriately handle the letters that would go off the alphabet after right shifting, ", () => {
            const actual = caesar("Top Secrets!", 24, true);
            const expected = "rmn qcapcrq!";

            expect(actual).to.equal(expected);
        });

        it("should approriately handle the letters that would go off the alphabet after left shifting, ", () => {
            const actual = caesar("Top Secrets!", -18, true);
            const expected = "bwx amkzmba!";

            expect(actual).to.equal(expected);
        });
    });

    describe("Decoding messages: ", () => {
        it("should decode the message by shifting to the opposite direction when shift is positive, ", () => {
            const actual = caesar("wnlmyxmnky", 5, false);
            const expected = "rightshift";

            expect(actual).to.equal(expected);
        });

        it("should decode the message by shifting to the opposite direction when shift is negative, ", () => {
            const actual = caesar("gzaoncdao", -5, false);
            const expected = "leftshift";

            expect(actual).to.equal(expected);
        });

        it("should maintain space and other non-letter symbols: ", () => {
            const actual = caesar("khb hyhubrqh!", 3, false);
            const expected = "hey everyone!";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters: ", () => {
            const actual = caesar("Yno To BOUROT", 6, false);
            const expected = "shi ni violin";

            expect(actual).to.equal(expected);
        });

        it("should approriately handle the letters that would go off the alphabet after shifting in the opposite direction, ", () => {
            const actual = caesar("rmn qcapcrq!", 24, false);
            const expected = "top secrets!";

            expect(actual).to.equal(expected);
        });

        it("should approriately handle the letters that would go off the alphabet after shifting in the opposite direction, ", () => {
            const actual = caesar("bwx amkzmba!", -18, false);
            const expected = "top secrets!";

            expect(actual).to.equal(expected);
        });
    });
});

