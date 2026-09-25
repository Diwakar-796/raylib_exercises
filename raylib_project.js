const r = require("raylib");

const screenWidth = 700;
const screenHeight = 500;
const rectWidth = 100;
const rectHeight = 100;

function setup() {
    r.InitWindow(screenWidth, screenHeight, "Moving Rectangle");
    r.SetTargetFPS(60);
}

function update() {
}

function draw() {
    let y = 0;
    let x = 0;

    while (!r.WindowShouldClose()) {
        r.BeginDrawing();
        r.ClearBackground(r.WHITE);

        if (((y + rectHeight) >= screenHeight) && ((x + rectWidth) < screenWidth)) {
            x += 1;
        } else if (((x + rectWidth) >= screenWidth) && (y + rectHeight) >= screenHeight) {
            y -= 1;
        } else if (((x + rectWidth) >= screenWidth) && ((y + rectHeight) < screenHeight)) {
            y -= 1;
        }


        r.DrawRectangle(x, y, rectWidth, rectHeight, r.BLACK);

        r.EndDrawing();
    }
}

function loop() {
    update();
    draw();
}

function main() {
    setup();
    loop();
    r.CloseWindow();
}

main();
