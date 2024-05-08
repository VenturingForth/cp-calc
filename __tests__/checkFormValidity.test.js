import { checkFormValidity } from "../utility/checkFormValidity.js";

describe("Form Validity Check Tests", () => {
    test("Should return an empty error object and a false error flag if given the default starting object", () => {
        const formData = {
            unitWeight: 0,
            carbWeight: 0,
            portionWeight: 0
        }
        const validityCheck = checkFormValidity(formData);
        expect(validityCheck).toEqual({
            errors: {},
            isError: false
        });
    })
    test("Should return an error object with the field and message if any of the weights are less than zero with a tripped error flag", () => {
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
        
        const validityCheck1 = checkFormValidity(formData1);
        const validityCheck2 = checkFormValidity(formData2);
        const validityCheck3 = checkFormValidity(formData3);

        expect(validityCheck1.errors).toHaveProperty("unitWeight", expect.any(String));
        expect(validityCheck1.errors.unitWeight).toBe("You must enter a number greater than zero.")
        expect(validityCheck1).toHaveProperty("isError", expect.any(Boolean));
        expect(validityCheck1.isError).toBe(true);

        expect(validityCheck2.errors).toHaveProperty("carbWeight", expect.any(String));
        expect(validityCheck2.errors.carbWeight).toBe("You must enter a number greater than zero.")
        expect(validityCheck2).toHaveProperty("isError", expect.any(Boolean));
        expect(validityCheck2.isError).toBe(true);

        expect(validityCheck3.errors).toHaveProperty("portionWeight", expect.any(String));
        expect(validityCheck3.errors.portionWeight).toBe("You must enter a number greater than zero.")
        expect(validityCheck3).toHaveProperty("isError", expect.any(Boolean));
        expect(validityCheck3.isError).toBe(true);
    })
    test("Should return an error object with a message assigned to the carbWeight key if carbWeight is higher than the unitWeight with a tripped error flag", () => {
        const formData = {
            unitWeight: 100,
            carbWeight: 200,
            portionWeight: 100
        }
        const validityCheck = checkFormValidity(formData);
        expect(validityCheck.errors).toHaveProperty("carbWeight", expect.any(String));
        expect(validityCheck.errors.carbWeight).toBe("Carbohydrate weight must be equal to or less than the unit weight.");
        expect(validityCheck).toHaveProperty("isError", expect.any(Boolean));
        expect(validityCheck.isError).toBe(true);
    })
    test("'Carb weight higher than unit weight' error message should override 'Carb weight should be higher than zero' error message with a tripped error flag", () => {
        const formData = {
            unitWeight: -50,
            carbWeight: -20,
            portionWeight: 100
        }
        const validityCheck = checkFormValidity(formData);
        expect(validityCheck.errors).toHaveProperty("carbWeight", expect.any(String));
        expect(validityCheck.errors.carbWeight).toBe("Carbohydrate weight must be equal to or less than the unit weight.");
        expect(validityCheck).toHaveProperty("isError");
        expect(validityCheck.isError).toBe(true);
    })
})