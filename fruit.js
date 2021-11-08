status = "";
img = "";

function preload() {
    loadImage("fruit.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects...";
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
}
