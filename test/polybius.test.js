// Write your tests here!
const {polybius} = require("../src/polybius");
const expect = require("chai").expect;

describe("polybius() tests written by Yi:", () => {
    describe("encoding a message:", () => {
        it("should encode a given message into number pairs: ", () => {
            const actual = polybius("projects");
            const expected = "5324434251314434";

            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is: ", () => {
            const actual = polybius("has a space");
            const expected = "321134 11 3453113151";

            expect(actual).to.equal(expected);
        });

        it("letter 'i' and letter 'j' share the same number pair: ", () => {
            const actual = polybius("I am Jessy", true);
            const expected = "42 1123 4251343445";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters: ", () => {
            const actual = polybius("OKok",true);
            const expected = "43524352";

            expect(actual).to.equal(expected);
        })
    });

    describe("decoding a message: ", () => {
        it("should return false the number of characters in the string excluding spaces is not even: ", () => {
            const actual = polybius("53 244342513", false);
            expect(actual).to.be.false;
        });

        it("should decode a string of number pairs into a message: ", () => {
            const actual = polybius("41513143415124", false);
            const expected = "decoder";

            expect(actual).to.equal(expected);
        });

        it("should leave spaces as is: ", () => {
            const actual = polybius("321134 11 3453113151", false);
            const expected = "has a space";

            expect(actual).to.equal(expected);
        });

        it("number pair 42 will be decoded as '(i/j)' ", () => {
            const actual = polybius("42 1123 4251343445", false);
            const expected = "(i/j) am (i/j)essy";

            expect(actual).to.equal(expected);
        });
    });
});