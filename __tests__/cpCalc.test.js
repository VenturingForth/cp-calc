const { cpCalc } = require("../utility/cpCalc.js")

describe("CP Calc Testing", () => {
    test("Should return 0 if given no arguments", () => {
        expect(cpCalc()).toBe(0);
    })
    test("Should return 1 if given a meal of unit weight 100g containing 10g of carbs and a portion of 100g" , () => {
        const unitWeight = 100
        const carbs = 10
        const portion = 100
        expect(cpCalc(unitWeight, carbs, portion)).toBe(1);
        expect(cpCalc(21, 11.2, 126)).toBe(1)
    })
    test("Should round to the nearest whole carb portion", () => {

    })
})