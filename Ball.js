class Ball {
    constructor(x,y,r) {
      var options = {
          isStatic:false,
          density:1.0,
          restitution:0.5,
          friction:0.5,
          stiffness:0.4
    }
      this.body = Bodies.circle(x,y,r,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png")
      World.add(world, this.body);
    }
    display(){
      
      imageMode(CENTER);
      fill("magenta");
      image(this.image,this.body.position.x,this.body.position.y,60,60);
    }
  };
