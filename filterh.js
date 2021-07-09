moustacheX = 0;
moustacheY = 0; 
function preload(){
  moustache = loadImage('https://upload.wikimedia.org/wikipedia/en/c/ca/MoustacheGraphic.png');
}
function setup(){
   canvas = createCanvas(300,300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotPoses);
}                             
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    moustacheX = results[0].pose.moustache.x;
    moustacheY = results[0].pose.moustache.y;
  }
}
function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
function draw(){
    image(video, 0, 0, 300, 300);
  image(moustache, moustacheX, moustacheY, 30, 30);
}
function take_snapshot(){    
    save('myFilterImage.png');
}