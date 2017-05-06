var redSlider, greenSlider, blueSlider, xspeedSlider, yspeedSlider;
var x = 100;
var y = 100;
var xspeed = 5;
var yspeed = 5;
function setup() {
    createCanvas(1410,810);
    background(51);
    redSlider = createSlider(0,255,0,0);
    greenSlider = createSlider(0,255,0,0);
    blueSlider = createSlider(0,255,0,0);
    //xspeedSlider = createSlider(-15,15,0,0);
    //yspeedSlider = createSlider(-15,15,0,0);
    //xspeedSlider.position(width-400,10);
    //yspeedSlider.position(width-400,30);
    redSlider.position(10,10);
    greenSlider.position(10,30);
    blueSlider.position(10,50);
}

function draw() {
    var squareW = 300, squareH = 300;
    var red = redSlider.value();
    var green = greenSlider.value();
    var blue = blueSlider.value();

    fill(red,green,blue);
    //fill(random(0,255),random(0,255),random(0,255));
    rect((width-squareW)/2,(height-squareH)/2,300,300);
    if(mouseIsPressed && (mouseX > 10 && mouseY > 70)){
      ellipse(mouseX,mouseY,30,30);
      x = mouseX;
      y = mouseY;
    }
    if(keyIsDown(DOWN_ARROW)){
        y += 5;
    }
    if(keyIsDown(UP_ARROW)){
        y -= 5;
    }
    if(keyIsDown(LEFT_ARROW)){
        x -= 5;
    }
    if(keyIsDown(RIGHT_ARROW)){
        x += 5;
    }

    if((x+30) >= 1280 || (x-30) <= 0){
      xspeed = -xspeed;
    }
    if((y+30) >= 800 || (y-30) <= 0){
      yspeed = -yspeed;
    }
    fill(red,green,blue);
    //fill((Math.random(0,255), Math.random(0,255), Math.random(0,255));
    ellipse(x+=xspeed,y+=yspeed,30,30);
}
