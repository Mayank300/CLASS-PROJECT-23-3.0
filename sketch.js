


var helicopterIMG, helicopter , package,packageIMG;
var packageBody,ground;
var box1,box2,box3;
  
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
 {
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
 }

 
	
	 
	function setup() {
		createCanvas(1200,500);
		 
		packageSprite=createSprite( width/2, 200, 10,10,);
		packageSprite.addImage(packageIMG)
		packageSprite.scale=0.2
		packageSprite.visible = false;
	 
		helicopterSprite=createSprite(50, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6
		helicopterSprite.velocityX = 3;

		box1 = createSprite(500,420,20,100);
	    box2 = createSprite(610,450,200,20);
	    box3 = createSprite(720,420,20,100);
	
	
		
		 groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)
	
	
		engine = Engine.create();
		world = engine.world;
	
		packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
		World.add(world, packageBody);
		
		  ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		  World.add(world, ground);
	
	
		Engine.run(engine);
	  
	 
	
	}
	
	
	function draw() {
		background(0);
		rectMode(CENTER);
		packageSprite.x = packageBody.position.x;
		packageSprite.y = packageBody.position.y;
		drawSprites();
		
		if(packageBody.position.y > 430){
			packageBody = Bodies.circle(width/2 , 430 , 5 , {restitution:0.5, isStatic:true});
			World.add(world, packageBody);
		}
		 
	
	 
	}
	
	function keyPressed() { 
		if (keyCode === DOWN_ARROW) {
			packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});	
			World.add(world, packageBody); 
			packageSprite.visible = true;
	
	
			}
		 }
	
	



