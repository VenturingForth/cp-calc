function cpCalc(unitWeight = 100, carbs = 0, portion = 0){
    const totalCarbs = carbs / unitWeight * portion;
    const cp = totalCarbs / 10;
    return convertToHalves(cp);
}

function convertToHalves(cp){
    let cpString = String((Math.round(cp * 10) / 10));
    if (!cpString.includes(".")){
        return cpString;
    } else {
        if (parseInt(cpString[cpString.length - 1]) <= 2){
            return roundCpDown(cpString);
        } else if (parseInt(cpString[cpString.length - 1]) >= 3 && parseInt(cpString[cpString.length - 1]) <= 7){
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

module.exports = { cpCalc }