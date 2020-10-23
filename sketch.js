var zoom = 0;


function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);   
    noLoop();
    noFill();
    
    drawFractal(width/2, height/2, 100+zoom);
}



function drawFractal(x, y, d){
   stroke(0, 0, 255);
   
   rect(x, y, d, d);
   ellipse(x, y, d, d);
   if(d > 10){
   drawFractal(x, y/2, d/2);
   drawFractal(x, y*2, d/2);
   drawFractal(x, y+d, d/2);
   drawFractal(x - d, y, d/2);
   drawFractal(x + d, y, d/2);
   
  }
};



function mousePressed(){
  background(255);
  zoom+=100;
  drawFractal(width/2, height/2, 100+zoom);
};
