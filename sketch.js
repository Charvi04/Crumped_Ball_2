var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,390,1200,20);
	//ball = new PaperBall(100,300,10,10);
	ball1 = new Ball2(100,300)
	dustbin = new Dustbin (1000,380,110,120);

	line1 = new Line1(1000,370,130,20);
    line2 = new Line2(935,310,20,140);
	line3 = new Line3(1060,310,20,140);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  ground.display();
 // ball.display();
 ball1.display();
  dustbin.display();
  line1.display();
  line2.display();
  line3.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:5,y:-5});
	}
}

