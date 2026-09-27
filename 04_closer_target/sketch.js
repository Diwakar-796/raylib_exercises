const r = require("raylib");

const geometry = require("./../math");

const screenWidth = 900;
const screenHeight = 700;
const FPS = 60;

const circleRadius = 25;

const sourcePosX = 100;
const sourcePosY = 150;

const target1PosX = 250;
const target1PosY = 500;

const target2PosX = 310;
const target2PosY = 600;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Closer Target");
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(sourcePosX, sourcePosY, circleRadius, r.BLUE);
    r.DrawCircle(target1PosX, target1PosY, circleRadius, r.RED);
    r.DrawCircle(target2PosX, target2PosY, circleRadius, r.RED);

    const distance1 = geometry.calcDistance(sourcePosX, sourcePosY, target1PosX, target1PosY);
    const distance2 = geometry.calcDistance(sourcePosX, sourcePosY, target2PosX, target2PosY);

    if (distance1 < distance2) {
        r.DrawLine(sourcePosX, sourcePosY, target1PosX, target1PosY, r.BLACK);
    } else {
        r.DrawLine(sourcePosX, sourcePosY, target2PosX, target2PosY, r.BLACK);
    }

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