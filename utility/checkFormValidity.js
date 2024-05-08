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

    console.log(typeof formData.carbWeight);
    console.log(typeof formData.unitWeight);


    console.log(`${formData.carbWeight} > ${formData.unitWeight} = ${formData.carbWeight > formData.unitWeight}`)

    if (formData.carbWeight > formData.unitWeight){
        validityCheck.errors.carbWeight = "Carbohydrate weight must be equal to or less than the unit weight."
    }

    if (Object.keys(validityCheck.errors).length){
        validityCheck.isError = true;
    }

    console.log(validityCheck, "<-- inside validity check function")

    return validityCheck;
}