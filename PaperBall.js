class Ball2 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          density:1.2,
          restitution:0.2,
          friction:0.5

      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      fill("brown");
      imageMode(CENTER);
      
      image( this.image,100,300,50,50);
    }
  };