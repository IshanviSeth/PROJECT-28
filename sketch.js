const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stone,mango,boy,tree, ground, launcherObj;
var mango1,mango2,mango3,mango4;
var boy_image,mango_image,stone_image,tree_image;
function preload(){
	boy=loadImage("sprites/boy.png");
  }
function setup() {
	createCanvas(1300,600);
	engine = Engine.create();
	world = engine.world;
  ground = new Ground(width/2, 600,width, 20);
	//Create the Bodies Here.
	stone = new Stone(235,420,30);
	
	tree = new Tree(1050,580);
	mango = new Mango(1100,100,30);
	mango1 = new Mango(1170,130,30);
	mango2 = new Mango(1010,140,30);
	mango3 = new Mango(1000,70,30);
	mango4 = new Mango(1100,70,30);
	launcherObj = new Launcher(stone.body, {x:235,y:420})
	Engine.run(engine);
}
function draw(){
  rectMode(CENTER);
  Engine.update(engine)
  background(230);

  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);

  drawSprites();

  stone.display();
  
  tree.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  ground.display();
  launcherObj.display();
  detectollision(stone,mango);
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);

}


function mouseDragged()
{
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObj.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stone.body, {x:235, y:420}) 
	  launcherObj.attach(stone.body);
	}
  }

  function detectollision(lstone,lmango){
	/*var collision = Matter.SAT.collides(lstone,lmango);
	if(collision.collided){
		console.log("collided");
		Matter.Body.setStatic(lmango,false);	
	}*/
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  //console.log(distance)
 // console.log(lmango.r+lstone.r)
  	if(distance<=lmango.r+lstone.r)
    {
      //console.log(distance);
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }


