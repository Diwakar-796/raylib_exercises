const r = require("raylib");

const geometry = require("./geometry");

const screenWidth = 700;
const screenHeight = 500;

const rectWidth = 500;
const rectHeight = 400;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Center a Rectangle");
    r.SetTargetFPS(60);
}

function update() {
}

function calcRectangleAxis(windowSize, axis) {
    return (windowSize - axis) / 2;
}

function draw() {
    const rectX = geometry.calcOffset(screenWidth, rectWidth);
    const rectY = geometry.calcOffset(screenHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(
        rectX,
        rectY,
        rectWidth,
        rectHeight,
        r.WHITE
    );
    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
