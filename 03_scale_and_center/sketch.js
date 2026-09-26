const r = require("raylib");

const geometry = require("./../math");

const screenWidth = 900;
const screenHeight = 700;
const FPS = 60;

const outerRectangleWidth = 700;
const outerRectangleHeight = 500;

const innerRectangleRelativeWidth = 0.8;
const innerRectangleRelativeHeight = 0.8;

const rectWidth = geometry.giveRectangleSize(outerRectangleWidth, innerRectangleRelativeWidth);
const rectHeight = geometry.giveRectangleSize(outerRectangleHeight, innerRectangleRelativeHeight);

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Scale and Center a rectangle");
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    const posX = 100;
    const posY = 50;

    const rectX = geometry.calcOffset(outerRectangleWidth, rectWidth);
    const rectY = geometry.calcOffset(outerRectangleHeight, rectHeight);

    r.BeginDrawing();
    r.ClearBackground(r.BLUE);
    r.DrawRectangle(posX, posY, outerRectangleWidth, outerRectangleHeight, r.WHITE);
    r.DrawRectangle(posX + rectX, posY + rectY, rectWidth, rectHeight, r.RED);

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