
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.render;

var Roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Roof = new roof(400,200,250,20);

	bob1 = new bob(450,400);
	bob2 = new bob(500,400);
	bob3 = new bob(400,400);
	bob4 = new bob(350,400);
	bob5 = new bob(300,400);

	rope1 = new rope(bob1.body,Roof.body);
	rope2 = new rope(bob2.body,Roof.body);
	rope3 = new rope(bob3.body,Roof.body);
	rope4 = new rope(bob4.body,Roof.body);
	rope5 = new rope(bob5.body,Roof.body);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  Roof.display();
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();

  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85});
}
}


