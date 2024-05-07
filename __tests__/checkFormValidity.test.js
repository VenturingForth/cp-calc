import { checkFormValidity } from "../utility/checkFormValidity.js";

describe("Form Validity Check Tests", () => {
    test("Should return an empty error object if given the default starting object", () => {
        const formData = {
            unitWeight: 0,
            carbWeight: 0,
            portionWeight: 0
        }
        const errors = checkFormValidity(formData);
        expect(errors).toEqual({});
    })
    test("Should return an error object with the field and message if any of the weights are less than zero", () => {
        const formData1 = {
            unitWeight: -100,
            carbWeight: 10,
            portionWeight: 100
        }
        const formData2 = {
            unitWeight: 100,
            carbWeight: -10,
            portionWeight: 100
        }
        const formData3 = {
            unitWeight: 100,
            carbWeight: 10,
            portionWeight: -100
        }
        
        const errors1 = checkFormValidity(formData1);
        const errors2 = checkFormValidity(formData2);
        const errors3 = checkFormValidity(formData3);

        expect(errors1).toHaveProperty("unitWeight");
        expect(errors1.unitWeight).toBe("You must enter a number greater than zero.")

        expect(errors2).toHaveProperty("carbWeight");
        expect(errors2.carbWeight).toBe("You must enter a number greater than zero.")

        expect(errors3).toHaveProperty("portionWeight");
        expect(errors3.portionWeight).toBe("You must enter a number greater than zero.")
    })
    test("Should return an error object with a message assigned to the carbWeight key if carbWeight is higher than the unitWeight", () => {
        const formData = {
            unitWeight: 100,
            carbWeight: 200,
            portionWeight: 100
        }
        const errors = checkFormValidity(formData);
        expect(errors).toEqual({
            carbWeight: "Carbohydrate weight must be equal to or less than the unit weight."
        })
    })
    test("'Carb weight higher than unit weight' error message should override 'Carb weight should be higher than zero' error message", () => {
        const formData = {
            unitWeight: -50,
            carbWeight: -20,
            portionWeight: 100
        }
        const errors = checkFormValidity(formData);
        expect(errors).toEqual({
            unitWeight: "You must enter a number greater than zero.",
            carbWeight: "Carbohydrate weight must be equal to or less than the unit weight"
        })
    })
})