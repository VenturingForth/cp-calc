export function checkFormValidity(formData){
    const validityCheck = {
        errors: {},
        isError: false
    }

    for (let key in formData){
        if (formData[key] < 0){
            validityCheck.errors[key] = "You must enter a number greater than zero."
        }
    }

    if (formData.carbWeight > formData.unitWeight){
        validityCheck.errors.carbWeight = "Carbohydrate weight must be equal to or less than the unit weight."
    }

    if (Object.keys(validityCheck.errors).length){
        validityCheck.isError = true;
    }

    return validityCheck;
}