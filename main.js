
  
  
  
  
  
  
  song = "";
   
  function preload()
  {
      song = loadSound("ghost_dj.mp3");
	  song2 = loadSound("neonrave.mp3")
  }
   
   
   
  scoreRightWrist = 0;
  scoreLeftWrist = 0;
   
  rightWristX = 0;
  rightWristY = 0;
   
  leftWristX = 0;
  leftWristY = 0;
   
  function setup() {
      canvas =  createCanvas(600, 500);
      canvas.center();
   
      video = createCapture(VIDEO);
      video.hide();
   
      poseNet = ml5.poseNet(video, modelLoaded);
      poseNet.on('pose', gotPoses);
  }
   
  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }
   
  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      }
   
      if(scoreLeftWrist > 0.2)
      {
          circle(leftWristX,leftWristY,20);
song.play();
      }
   
	  if(scoreRightWrist > 0.2) {
		ircle(rightWristX,rightWristY,20);
		song2.play();
	  }
  }
   
  function play()
  {
      song.play();
      song.setVolume(1);
      song.rate(1);
  }
   
  
  