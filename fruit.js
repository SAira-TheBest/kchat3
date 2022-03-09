status1 =""
img =""
function setup()
{
    canvas = createCanvas(640,420)
    canvas.center()

    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
    document.getElementById("status").innerHTML = "Status: Detecting Objects"
}

function modelLoaded(){
    console.log("Model loaded :)")
    status1 = true
    objectDetector.detect(img, gotResult)
}

function gotResult(error, results){
 
    if(error){
        console.error(error);
    }
    console.log(results)
    Objects = results;
}

function preload()
{
    img = loadImage("USE THIS TO.jpg")

}

function draw()
{

if(status1 != "")
{
    objectDetector.detect(video, gotResult)
    R = random(255)
    G = random(255)
    B = random(255)


  for(i= 0; i<Objects.length; i++)
  {
      document.getElementById("status").innerHTML="Status : Object Detected"
      document.getElementById("number_of_objects").innerHTML="Number of Objects Detected:" + Objects[i].length;
      fill(R,G,B)
      percent = floor(Objects[i].confidence * 100)
      console.log(percent)
      text(Objects[i].label + " " + percent + "%", Objects[i].x, Objects[i].y)
      noFill()
      stroke(R,G,B)
      rect(Objects[i].x, Objects[i].y, Objects[i].width, Objects[i].height)

  }
}
}
