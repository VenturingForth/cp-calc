export function checkFormValidity(formData){
    const errors = {};
    for (let key in formData){
        if (formData[key] < 0){
            errors[key] = "You must enter a number greater than zero."
        }
    }
    if (formData.carbWeight > formData.unitWeight){
        errors.carbWeight = "Carbohydrate weight must be equal to or less than the unit weight."
    }
    console.log(errors);
    return errors;
}