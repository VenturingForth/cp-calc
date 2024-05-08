import { cpCalc } from "../utility/cpCalc.js";

describe("CP Calc Testing", () => {
    test("Should return 1 if given a meal of unit weight 100g containing 10g of carbs and a portion of 100g" , () => {
        const formData = {
            unitWeight: 100,
            carbWeight: 10,
            portionWeight: 100
        };
        expect(cpCalc(formData)).toBe("1");
    })
    test("Should round to the nearest whole carb portion", () => {
        const formData = {
            unitWeight: 51,
            carbWeight: 35.3,
            portionWeight: 30
        }
        expect(cpCalc(formData)).toBe("2");
    })
    test("Should return CP rounded down to the nearest whole number (e.g. 1) if CP decimal place comes to 1 or 2", () => {
        const formData = {
            unitWeight: 100,
            carbWeight: 12,
            portionWeight: 100
        }
        expect(cpCalc(formData)).toBe("1");
    })
    test("Should return CP to the nearest half fraction (e.g. 1½) if CP decimal place comes to 3, 4, 5, 6 or 7", () => {
        const formData1 = {
            unitWeight: 100,
            carbWeight: 13,
            portionWeight: 100
        }
        
        const formData2 = {
            unitWeight: 100,
            carbWeight: 17,
            portionWeight: 100
        }
        
        expect(cpCalc(formData1)).toBe("1½");
        expect(cpCalc(formData2)).toBe("1½");
    })
    test("Should return CP to the whole number (e.g. 2) if CP decimal place comes to 8 or 9", () => {
        const formData1 = {
            unitWeight: 100,
            carbWeight: 18,
            portionWeight: 100
        }
        
        const formData2 = {
            unitWeight: 100,
            carbWeight: 19,
            portionWeight: 100
        }
        
        expect(cpCalc(formData1)).toBe("2");
        expect(cpCalc(formData2)).toBe("2");
    })
    test("Should accurately calculate the CP for any meal", () => {
        //Fish Pie from Tesco
        const pieData = {
            unitWeight: 374,
            carbWeight: 42.1,
            portionWeight: 200
        }
        const fishPie = cpCalc(pieData);
        expect(fishPie).toBe("2½")

        //A full can of Salt and Vinegar Pringles
        const pringlesData = {
            unitWeight: 100,
            carbWeight: 56,
            portionWeight: 185
        }
        const pringles = cpCalc(pringlesData);
        expect(pringles).toBe("10½");

        //A single serve of a 1.5kg lasagne from Tesco
        const lasagneData = {
            unitWeight: 100,
            carbWeight: 11.1,
            portionWeight: 375
        }        
        const lasagne = cpCalc(lasagneData);
        expect(lasagne).toBe("4");
    })
})