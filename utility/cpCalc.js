export function cpCalc (unitWeight = 100, carbs = 0, portion = 0){
    return carbs / unitWeight * portion;
}

module.exports = { cpCalc }