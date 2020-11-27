
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	

	
engine = Engine.create();
	world = engine.world;

	box=new Box(1200,650)
	ball=new Ball(200,450,40)
	ground=new Ground(width/2,690,width,5)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  box.display();
  ball.display();
  ground.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-15});
    
  }

}



