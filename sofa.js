status = "";
img = "";
objects = [];

function preload() {
    img = loadImage("sofa.jpg");
}

function setup() {
    canvas = createCanvas(600, 300);
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
    objects = results;
}

function draw() {
    image(img, 0, 0, 600, 300);
    if (status != "") {
        for (i = 0; i < objects.length; i++) {
            fill("red");
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("object_number").innerHTML = "Number of Objects = " + objects.length;
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("red");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}
