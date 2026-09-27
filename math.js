function calcOffset(outer, inner) {
    return (outer - inner) / 2;
}

function giveRectangleSize(outerSize, relativeSize) {
    return outerSize * relativeSize;
}

function sqr(value) {
    return value * value;
}

function calcDistance(x1, y1, x2, y2) {
    return (sqr(x1 - x2) + sqr(y1 - y2)) ** 0.5;
}

module.exports = {
    calcOffset,
    giveRectangleSize,
    calcDistance,
};