
song = "";
song2 = "";
function draw() {
    image(video,0,0,300,300);
}

function setup() {
    video = createCapture(VIDEO);
    video.hide()

    canvas = createCanvas(300,500);
    canvas.center();
}



function preload() {
    song = loadSound("ghost_dj.mp3");
    song2 = loadSound("neonrave.mp3");
}