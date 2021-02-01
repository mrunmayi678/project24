
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	ground = Bodies.rectangle(400, 680, 800, 20 , {isStatic:true} );
	World.add(world, ground);


	dustbinPosition=500
	dustbinY=620


	dustbinleftSprite=createSprite(dustbinPosition, dustbinY, 20,100);
	dustbinleftSprite.shapeColor=color(255,0,0);

	dustbinLeftBody = Bodies.rectangle(dustbinPosition+20, dustbinY, 20,100 , {isStatic:true} );
	World.add(world, dustbinLeftBody);

	dustbinBase=createSprite(dustbinPosition+100, dustbinY+40, 200,20);
	dustbinBase.shapeColor=color(255,0,0);

	dustbinBottomBody = Bodies.rectangle(dustbinPosition+100, dustbinY+45-20, 200,20 , {isStatic:true} );
	World.add(world, dustbinBottomBody);

	dustbinRightSprite=createSprite(dustbinPosition+200 , dustbinY, 20,100);
	dustbinRightSprite.shapeColor=color(255,0,0);

	dustbinRightBody = Bodies.rectangle(dustbinPosition+200-20 , dustbinY, 20,100 , {isStatic:true} );
	World.add(world, dustbinRightBody);


   Engine.run(engine);
     
	paper1= new Paper(100,650,20);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  fill("yellow");
  rect(ground.position.x,ground.position.y,800,20);
  
  paper1.display();

  drawSprites();
 
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
	}
}


