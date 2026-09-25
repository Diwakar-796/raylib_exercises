const r = require("raylib");

const circleRadius = 25;

const screenWidth = 700;
const screenHeight = 500;

const sourcePosX = 100;
const sourcePosY = 150;

const target1PosX = 150;
const target1PosY = 260;

const target2PosX = 310;
const target2PosY = 200;

function calculateDistance(sourcePosX, sourcePosY, targetPosX, targetPosY) {
    return ((sourcePosX - targetPosX) ** 2 + (sourcePosY - targetPosY) ** 2) ** 0.5;
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Find the Closer Target");
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

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(sourcePosX, sourcePosY, circleRadius, r.BLUE);
    r.DrawCircle(target1PosX, target1PosY, circleRadius, r.RED);
    r.DrawCircle(target2PosX, target2PosY, circleRadius, r.RED);

    const distance1 = calculateDistance(sourcePosX, sourcePosY, target1PosX, target1PosY);
    const distance2 = calculateDistance(sourcePosX, sourcePosY, target2PosX, target2PosY);

    if (distance1 < distance2) {
        r.DrawLine(sourcePosX, sourcePosY, target1PosX, target1PosY, r.BLACK);
    } else {
        r.DrawLine(sourcePosX, sourcePosY, target2PosX, target2PosY, r.BLACK);
    }

    r.EndDrawing();
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
