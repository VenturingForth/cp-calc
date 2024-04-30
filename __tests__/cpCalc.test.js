import { cpCalc } from "../utility/cpCalc.js";

describe("CP Calc Testing", () => {
    test("Should return 0 if given no arguments", () => {
        expect(cpCalc()).toBe(0);
    })
})