function cpCalc (unitWeight = 100, carbs = 0, portion = 0){
    const totalCarbs = carbs / unitWeight * portion;
    const cp = totalCarbs / 10;
    return cp;
}

module.exports = { cpCalc }