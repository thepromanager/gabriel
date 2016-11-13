var img;
function preload() {
  img = loadImage("gabriel.PNG");
}

function setup() {
  createCanvas(windowWidth,windowHeight)
}

function draw() {
  //background(0)
  translate(width/2,height/2)
  rotate(frameCount*0.02)
  image(img, 0, 0,width/4,height/3);
  rotate(-frameCount*0.02)
  translate(-width/2,-height/2)
  textSize(40)
  colorMode(HSB)
  fill(map(sin(frameCount*0.01),-1,1,0,360),100,100)
  text("GRATTIS",width/4,height/8)
  text("knjetjled dadly 90/10",width/8,height/8+40)
  textSize(20)
  text("på fars dag",width/4,height/8+70)
}