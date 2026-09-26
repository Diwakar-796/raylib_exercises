const r = require("raylib");

const geometry = require("./../math");

const windowWidth = 900;
const windowHeight = 700;
const FPS = 60;

const outerRectangleWidth = 700;
const outerRectangleHeight = 500;

const innerRectangleWidth = 500;
const innerRectangleHeight = 200;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Center a Rectangle inside Rectangle");
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    const posX = 100;
    const posY = 50;

    const rectX = geometry.calcOffset(outerRectangleWidth, innerRectangleWidth);
    const rectY = geometry.calcOffset(outerRectangleHeight, innerRectangleHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(posX, posY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
    r.DrawRectangle(posX + rectX, posY + rectY, innerRectangleWidth, innerRectangleHeight, r.RED);

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