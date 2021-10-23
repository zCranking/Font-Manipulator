function setup(){
    video = createCapture(VIDEO);
    video.size(750, 700);
    video.position(50, 200)
    
    canvas = createCanvas( 660, 660);
    canvas.position(860,80);
}
function draw(){
    background("#2E86AB");
    fill("#80A4ED");
    stroke("#3C6E71");
}  