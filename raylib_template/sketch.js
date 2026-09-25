const r = require("raylib");

const windowWidth = 500;
const windowHeight = 400;
const FPS = 60;

function setup() {
    r.InitWindow(windowWidth, windowHeight);
    r.SetTargetFPS(FPS);
}

function update() { }

function draw() { }

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