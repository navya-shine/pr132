status = "";
function preload()
{
    img = loadImage('Chair.jpg');
}
function setup()
{
    canvas = createCanvas(580, 360);
    canvas.center();
    objectDetecter = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Staus : Dectecting Objects";
}
function modelLoaded()
{
    console.log('Model Loaded');
    status = true;
    objectDetecter.detect(img , gotPoses);
}
function gotPoses()
{
    console.log(results);
}