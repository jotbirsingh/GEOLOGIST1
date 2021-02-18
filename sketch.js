const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer,ground,stone,rubber,stone1,sand,sand1,sand2,sand3,sand4,sand5,sand6,sand7;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(400,200);
	ground = new Ground(600,height,1200,20)
    stone = new Stone(400,200,100,100);
    rubber = new Rubber(600,200,70);
    stone1 = new Rect(100,200,80,80);
    sand = new Stone(420,200,20,20);
    sand1 = new Stone(430,200,20,20);
    sand2 = new Stone(440,200,20,20);
    sand3 = new Stone(450,200,20,20);
    sand4 = new Stone(410,200,20,20);
    sand5 = new Stone(460,200,20,20);
    sand6 = new Stone(470,200,20,20);
    sand7 = new Stone(480,200,20,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyBlue");

  
  
  drawSprites();

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  stone1.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
}



