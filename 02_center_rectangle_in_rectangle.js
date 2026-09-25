const r = require("raylib");

const geometry = require("./geometry");

const screenWidth = 900;
const screenHeight = 800;

const outerRectangleWidth = 700;
const outerRectangleHeight = 500;

const innerRectangleWidth = 500;
const innerRectangleHeight = 200;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Center a Rectangle inside another Rectangle");
    r.SetTargetFPS(60);
}

function giveRectangleAxis(windowSize, axis) {
    return (windowSize - axis) / 2;
}

function update() {
}

function draw() {
    const posX = 100;
    const posY = 50;

    const rectX = geometry.calcOffset(outerRectangleWidth, innerRectangleWidth);
    const rectY = geometry.calcOffset(outerRectangleHeight, innerRectangleHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(posX, posY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
    r.DrawRectangle(
        posX + rectX,
        posY + rectY,
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED
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
