const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basket1, basket2, basket3
var ground

function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255,255,0)

  ground = Bodies.rectangle(1200,400, 800, 10 , {isStatic:true} );
   World.add(world, ground);
  
  basket1 = new Dustbin(950,350,200,20);
  basket2 = new Dustbin(855,310,20,100);
  basket3 = new Dustbin(1055,310,20,100);

  paperBall = new Paper(50,350,25);
  
}

function draw() {
  background("black"); 
  
  keyPressed();
  drawSprites();
  basket1.display();
  basket2.display();
  basket3.display();
  paperBall.display();
}

function keyPressed(){
  if(keyCode === UP_ARROW){

    Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:85,y:-85});

  }
}