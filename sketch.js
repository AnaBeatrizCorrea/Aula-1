function setup() {
  createCanvas(1000, 1000);
  background("lightblue");
}

function draw () {
  
// console.log (mouseispressed);
  stroke("black")
  fill("darkblue");
  if (mouseIsPressed) {
  circle (mouseX, mouseY, 30);
  } 
}