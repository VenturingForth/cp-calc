export function cpCalc({unitWeight, carbWeight, portionWeight}){
    const totalCarbs = carbWeight / unitWeight * portionWeight;
    const cp = totalCarbs / 10;
    return convertToHalves(cp);
}

function convertToHalves(cp){
    const cpString = String((Math.round(cp * 10) / 10));
    const lastDigit = parseInt(cpString[cpString.length - 1])

    if (!cpString.includes(".")){
        return cpString;
    } else {
        if (lastDigit <= 2){
            return roundCpDown(cpString);
        } else if (lastDigit >= 3 && lastDigit <= 7){
            return roundCpToHalf(cpString);
        } else {
            return roundCpUp(cpString);
        }
    } 
}

function roundCpDown(cpString){
    let result = "";
    for (let i = 0; i < cpString.length - 2; i++){
        result += cpString[i];
    }
    return result;
}

function roundCpToHalf(cpString){
    let result = "";
    for (let i = 0; i < cpString.length - 2; i++){
        result += cpString[i];
    }
    result += "½";
    return result;
}

function roundCpUp(cpString){
    let result = "";
    const splitCpString = cpString.split(".");
    result += (parseInt(splitCpString[0])) + 1;
    return result;
}