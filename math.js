function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function giveRectangleSize(outerSize, relativeSize) {
    return outerSize * relativeSize;
}

module.exports = {
    calcOffset,
    giveRectangleSize,
};