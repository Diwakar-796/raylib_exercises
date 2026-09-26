const r = require("raylib");

const screenWidth = 900;
const screenHeight = 800;

const outerRectangleWidth = 700;
const outerRectangleHeight = 500;

const innerRectangleRelativeWidth = 0.8;
const innerRectangleRelativeHeight = 0.8;

const geometry = require("./geometry");

const rectWidth = giveRectangleSize(outerRectangleWidth, innerRectangleRelativeWidth);
const rectHeight = giveRectangleSize(outerRectangleHeight, innerRectangleRelativeHeight);

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Center a Rectangle inside another Rectangle");
    r.SetTargetFPS(60);
}

function update() {
}


function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function giveRectangleAxis(windowSize, axis) {
    return (windowSize - axis) / 2;
}

function giveRectangleSize(outerSize, relativeSize) {
    return outerSize * relativeSize;
}

function draw() {
    const posX = 100;
    const posY = 50;

    const rectX = geometry.calcOffset(outerRectangleWidth, rectWidth);
    const rectY = geometry.calcOffset(outerRectangleHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(posX, posY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
    r.DrawRectangle(
        posX + rectX,
        posY + rectY,
        rectWidth,
        rectHeight,
        r.RED
    );

    r.EndDrawing();
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();