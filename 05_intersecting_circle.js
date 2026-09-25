const r = require("raylib");

const screenWidth = 700;
const screenHeight = 600;

const x1 = 200;
const y1 = 250;

const x2 = 250;
const y2 = 391;

const r1 = 50;
const r2 = 100;

function sqr(value) {
    return value * value;
}

function calcDistance(x1, y1, x2, y2) {
    return (sqr(x1 - x2) + sqr(y1 - y2)) ** 0.5;
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Intersecting Circle");
    r.SetTargetFPS(60);
}

function update() {
}

function getColor() {
    const distance = calcDistance(x1, y1, x2, y2);
    if (distance < (r1 + r2)) {
        return r.RED;
    }

    return r.BLACK;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);
    let color = getColor();

    r.DrawCircle(x1, y1, r1, color);
    r.DrawCircle(x2, y2, r2, color);

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