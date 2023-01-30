song="";

function preload()
{
    song=loadSound("music.mp3");
}


function setup() {
    canvas = createCanvas(600,500);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

scoreRightWrist=0;
scoreLeftWrist=0;

RightWristX = 0;
RightWristY = 0;

LeftWristX = 0;
LeftWristY = 0;