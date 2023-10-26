// Write your tests here!
const {substitution} = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution() tests written by Yi: ", () => {
    describe("Error handling: ", () => {
        it("should return false if substitution alphabet is not defined: ", () => {
            const actual = substitution("hello", undefined);
            
            expect(actual).to.be.false;
        });

        it("should return false if the length of substitution alphabet is less than 26: ", () => {
            const actual = substitution("hello", "#@^nd;e.d");

            expect(actual).to.be.false;
        });

        it("should return false if there are duplicate characters in the subtitution alphabet: ", () => {
            const actual = substitution("hello", "abcdeabcdeabcdeabcdeabcdea");
            
            expect(actual).to.be.false;
        });
    });

    describe("encoding a message: ", () => {
        it("should encode a message by using characters from the substitution alphabet: ", () => {
            const actual = substitution("hello there", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "d&ccv jd&b&";

            expect(actual).to.equal(expected);
        });

        it("should leave space as is: ", () => {
            const actual = substitution("a cd e", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "$ ae &";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters: ", () => {
            const actual = substitution("SCREAMING", "$wae&zrdxtfcygvuhbijnokmpl");
            const expected = "iab&$yxgr";

            expect(actual).to.equal(expected);
        });

        it("should encode a message using any kind of special characters included in the substitution alphabet : ", () => {
            const actual = substitution("Kate", "$wae&zrdxt?cygvuhbijn!kmpl");
            const expected = "?$j&";

            expect(actual).to.equal(expected);
        });
    });

    describe("decoding a message: ", () => {
        it("should decode a message by using standard alphabet characters: ", () => {
            const actual = substitution("d&ccv jd&b&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "hello there";

            expect(actual).to.equal(expected);
        });

        it("should leave space as is: ", () => {
            const actual = substitution("d$i $ iu$a&", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "has a space";

            expect(actual).to.equal(expected);
        });

        it("should ignore capital letters: ", () => {
            const actual = substitution("IAB&$YXGr", "$wae&zrdxtfcygvuhbijnokmpl", false);
            const expected = "screaming";

            expect(actual).to.equal(expected);
        });

        it("should decode a message that consisting special characters included in the substitution alphabet : ", () => {
            const actual = substitution("?$j&", "$wae&zrdxt?cygvuhbijn!kmpl", false);
            const expected = "kate";

            expect(actual).to.equal(expected);
        });
    });
});
