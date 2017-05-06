
function ball() {
  var x = 0;
  var y = 0;
  var xvelocity = 1;
  var yvelocity = 1;
  var yacceleration = 1;
  var xacceleration = 1;
  var bool = false;
  var r,g,b;

  //------------------------------Get Methods--------------------
  this.getX = function(){
    return x;
  }

  this.getY = function(){
    return y;
  }

  this.getXVelocity = function(){
    return xvelocity;
  }

  this.getYVelocity = function(){
    return yvelocity;
  }
  this.getXAcceleration = function(){
    return xacceleration;
  }

  this.getYAcceleration = function(){
    return yacceleration;
  }

  //-------------------------------Set Methods-------------------
  this.setXVelocity = function(xvel){
    xvelocity = xvel;
  }

  this.setYVelocity = function(yvel){
    yvelocity = yvel;
  }

  this.setX = function(x1){
    x = x1;
  }

  this.setY = function(y1){
    y = y1;
  }

  this.setColor = function(r1,g1,b1){
      r = r1;
      g = g1;
      b = b1;
  }

  this.setXAcceleration = function(xacel){
    xacceleration = xacel;
  }

  this.setYAcceleration = function(yacel){
    yacceleration = yacel;
  }
  //--------------------------------Update Methods-------------------
  this.show = function(){
    /*if(mouseIsPressed){
      bool = true;
      x = mouseX;
      y = mouseY;
    }*/
    //if(bool){
      fill(r,g,b);
      ellipse(x,y,windowWidth*0.046875,windowWidth*0.046875);
    //}
  }

  this.update = function(){
    yvelocity += yacceleration;
    xvelocity += xacceleration;
    this.setX(x+xvelocity);
    this.setY(y+yvelocity);
  }

  this.checkMargins = function(){
    /*if(yvelocity == 25 && y+60 >=height){
      yacceleration = 0;
      yvelocity = 0;
    }*/
    //if(mouseIsPressed){
      //console.log(yvelocity);
    //}
    if((y+30+yvelocity) >= height || (y-30) <= 0){
        yvelocity = -yvelocity;
        //console.log("y: "+y+" x: "+x+" yvel: "+yvelocity+" xvel: "+xvelocity);
        if(yvelocity == (-yacceleration+1) || yvelocity == (-yacceleration-1)){
          yacceleration = 0;
          yvelocity = 0;
        }
    }

    if((x+30+xvelocity) >= width || (x-30+xvelocity) <= 0){
        xvelocity = -xvelocity;
        console.log("y: "+y+" x: "+x+" yvel: "+yvelocity+" xvel: "+xvelocity);
        if(xvelocity == (-xacceleration-2) || xvelocity == (-xacceleration-2)||xvelocity == (-xacceleration-1) || xvelocity == (-xacceleration-1) || xvelocity == 0 ) {
          xacceleration = 0;
          xvelocity = 0;
        }
    }

  }
}


var ball1;
var balls = [10];
var contador = 0;
var button;
var bool = false;

function setup(){
  //frameRate(15);
  ball1 = new ball();
  createCanvas(windowWidth, windowHeight);
  ball1.setX(200);
  ball1.setY(300);
  for(var i = 0; i < 100; i++){
    balls[i] = new ball();
  }
  /*for(var i = 0; i < 10; i++){
    balls[i].setX(random(30,1280));
    balls[i].setY(random(30,700));
  }*/
  background(36,143,143);
  button = createButton('click me');
  button.position(50, 50);
}
function mouseClicked(){
  balls[contador].setX(mouseX);
  balls[contador].setY(mouseY);
  balls[contador].setColor(random(0,255),random(0,255),random(0,255));
  balls[contador].setXVelocity(ceil(random(-2,2)));
  balls[contador].setYAcceleration(ceil(random(1,12)));
  balls[contador].setXAcceleration(ceil(random(1,5)));
  contador++;
}
function toggleVisibility(){
  console.log("Pressed");
  bool = !bool;
}

function draw(){
  button.mouseClicked(toggleVisibility);
  if(bool){
    background(36,143,143);
  }
  textSize(32);
  for(var i = 0; i < contador; i++){
    balls[i].show();
    balls[i].update();
    balls[i].checkMargins();
  }
  text(contador,10,30);
  line(0,height-5,width,height-5);
  /*ball1.show();
  ball1.update();
  ball1.checkMargins();*/
}
