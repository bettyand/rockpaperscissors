const { hands, getHand, betty, chris, joseph, darci, playRound, playGame, playTournament, getName, getLength } = require("../index.js");

describe("test rps functions and objects", () => {
    test("check name in object", () => {
        expect(betty.name).toBe("Betty");
    });
    test("check hands length", () => {
        expect(hands).toHaveLength(3);
    });
    test("check if function is returning", () => {
        expect(playRound(betty, chris)).toBeTruthy();
    });
    test("make sure functions are calling each other", () => {
        const name = jest.fn();
        getLength(name);
        expect(name).toHaveBeenCalled();
    });
    test("make sure it returns at all", () => {
        const name = jest.fn();
        getLength(name);
        expect(name).toHaveReturned();
    });
});
