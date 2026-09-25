const r = require("raylib");

const geometry = require("./math");

const screenWidth = 700;
const screenHeight = 500;
const FPS = 60;

const rectWidth = 500;
const rectHeight = 400;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Center a Rectangle");
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    const rectX = geometry.calcOffset(screenWidth, rectWidth);
    const rectY = geometry.calcOffset(screenHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE);
    r.EndDrawing();
}

function running() {
    return !r.WindowShouldClose();
}

function teardown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    teardown,
};