var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);
	var ball_options={
		isStatic:false,
		restitution:0.05,
		friction:0,
		density:1.2
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(200,100,20,ball_options)
	ground = new Ground(width/2,500,width,10)
	leftSide = new Ground(900,445,20,120)
	rightSide = new Ground(700,445,20,120)
	World.add(world,ball)
	Engine.run(engine);

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  
  background(0);
  drawSprites();
 
  ellipse(ball.position.x, ball.position.y, 20 )
  ground.show()
  leftSide.show()
  rightSide.show()
}

function keyPressed(){
	if (keyCode == LEFT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:-50,y:0})
	}
	if (keyCode == RIGHT_ARROW){
		Matter.Body.applyForce(ball,{x:0,y:0},{x:50,y:0})
	}
}


