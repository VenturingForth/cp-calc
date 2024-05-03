import { cpCalc } from "../utility/cpCalc.js";

describe("CP Calc Testing", () => {
    test("Should return 0 if given no arguments", () => {
        expect(cpCalc()).toBe("0");
    })
    test("Should return 1 if given a meal of unit weight 100g containing 10g of carbs and a portion of 100g" , () => {
        const unitWeight = 100;
        const carbs = 10;
        const portion = 100;
        expect(cpCalc(unitWeight, carbs, portion)).toBe("1");
    })
    test("Should round to the nearest whole carb portion", () => {
        const unitWeight = 51;
        const carbs = 35.3;
        const portion = 30;
        expect(cpCalc(unitWeight, carbs, portion)).toBe("2");
    })
    test("Should return CP rounded down to the nearest whole number (e.g. 1) if CP decimal place comes to 1 or 2", () => {
        const unitWeight2 = 100;
        const carbs2 = 12;
        const portion2 = 100;

        expect(cpCalc(unitWeight2, carbs2, portion2)).toBe("1");
    })
    test("Should return CP to the nearest half fraction (e.g. 1½) if CP decimal place comes to 3, 4, 5, 6 or 7", () => {
        const unitWeight1 = 100;
        const carbs1 = 13;
        const portion1 = 100;

        const unitWeight2 = 100;
        const carbs2 = 17;
        const portion2 = 100;

        expect(cpCalc(unitWeight1, carbs1, portion1)).toBe("1½");
        expect(cpCalc(unitWeight2, carbs2, portion2)).toBe("1½");
    })
    test("Should return CP to the whole number (e.g. 2) if CP decimal place comes to 8 or 9", () => {
        const unitWeight1 = 100;
        const carbs1 = 18;
        const portion1 = 100;

        const unitWeight2 = 100;
        const carbs2 = 19;
        const portion2 = 100;

        expect(cpCalc(unitWeight1, carbs1, portion1)).toBe("2");
        expect(cpCalc(unitWeight2, carbs2, portion2)).toBe("2");
    })
    test("Should accurately calculate the CP for any meal", () => {
        //Fish Pie from Tesco
        const unitWeight1 = 374;
        const carbs1 = 42.1;
        const portion1 = 200;
        const fishPie = cpCalc(unitWeight1, carbs1, portion1);
        expect(fishPie).toBe("2½")

        //A full can of Salt and Vinegar Pringles
        const unitWeight2 = 100;
        const carbs2 = 56;
        const portion2 = 185;
        const pringles = cpCalc(unitWeight2, carbs2, portion2);
        expect(pringles).toBe("10½");

        //A single serve of a 1.5kg lasagne from Tesco
        const unitWeight3 = 100;
        const carbs3 = 11.1;
        const portion3 = 375;
        const lasagne = cpCalc(unitWeight3, carbs3, portion3);
        expect(lasagne).toBe("4");
    })
})