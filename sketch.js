const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
createCanvas(1200, 500);

    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,490,1200,20);
	ball = new Ball(100,300,20);
	dustbin = new Dustbin(1000,388);
	line1 = new Lines(930,400,20,170);
    line2 = new Lines(1070,400,20,170);
	line3 = new Lines(1000,470,170,20);
	Engine.run(engine);
  }


function draw() {
  rectMode(CENTER);
  background(220);
  
 
  ball.display();

line1.display();
line2.display();
line3.display();

dustbin.display();
ground.display();
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:70,y:-70});
	}
}

