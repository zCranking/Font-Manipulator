noseX = 0;
noseY = 0;
difference = 0;
right_wrist= 0;
left_wrist= 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(750, 900);
    video.position(50, 100)
    
    canvas = createCanvas( 660, 660);
    canvas.position(860, 80);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw(){
    background("#2E86AB");
    textSize(-200+difference);
    text("Arav", -300+noseX, noseY);  
}   
function modelLoaded(){
    console.log("model loaded...");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x" + noseX + "nose y" + noseY);
        
        left_wrist = results[0].pose.leftWrist.x;
        right_wrist = results[0].pose.rightWrist.x;
        difference = floor(left_wrist - right_wrist);
        console.log("difference = " + difference);
    }
}