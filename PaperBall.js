class PaperBall {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          friction:0.5,
          restitution:0.2,
          density:1.2

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.image = loadImage("paper.png");
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
     
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("yellow");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
