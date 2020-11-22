
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	ground = Bodies.rectangle(width/2, 660, width, 10 , {isStatic:true} );
	World.add(world, ground);

paper = new Paper (50,380,20); 	
box1 = new Box (800,648,200,20);
box2 = new Box (710,600,20,100);
box3 = new Box (890,600,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 box1.display();
 box2.display();
 box3.display();
 
 rectMode(CENTER)
 fill("yellow")
 rect(ground.position.x,ground.position.y,width,10);
paper.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		
	Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
}
}
