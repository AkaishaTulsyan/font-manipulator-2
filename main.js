nosex=0;
nosey=0;
leftwrist=0;
rightwrist=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
   video.size(500,500);
   canvas=createCanvas(500,400);
   canvas.position(800,200);
   poseNet=ml5.poseNet(video,handler);
   poseNet.on("pose",position);
}
function handler(){
    console.log("posenet loaded!");
}
function position(result){
    if(result.length>0){
        console.log(result);
    }
}