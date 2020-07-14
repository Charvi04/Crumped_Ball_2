class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Images/dustbin.png")
      World.add(world, this.body);
    }
    display(){
      
      imageMode(CENTER);
      fill("brown");
      image(this.image,this.body.position.x,this.body.position.y,130,150);
    }
  };
