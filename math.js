function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function giveRectangleSize(outerSize, relativeSize) {
    return outerSize * relativeSize;
}

function calculateDistance(sourcePosX, sourcePosY, targetPosX, targetPosY) {
    return ((sourcePosX - targetPosX) ** 2 + (sourcePosY - targetPosY) ** 2) ** 0.5;
}

module.exports = {
    calcOffset,
    giveRectangleSize,
    calculateDistance,
};