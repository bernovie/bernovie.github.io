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
      ellipse(x,y,60,60);
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
