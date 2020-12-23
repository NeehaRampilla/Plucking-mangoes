const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var tree,boy,ground;

function preload(){
boy=loadImage("boy.png");
tree=loadImage("tree.png");

}

function setup() {
	createCanvas(1200, 700);



	engine = Engine.create();
	world = engine.world;
	stone=new Stone(235,530,35);
	m1=new Mango(1150,70,30);
	m2=new Mango(900,120,39);
	m3=new Mango(1000,70,30);
	m4=new Mango(1150,160,30);
	m5=new Mango(1100,70,30);
	m6=new Mango(1050,130,30);
	ground= new Ground(600,700,width,20);
	slingshot=new Slingshot(stone.body,{x:235,y:450})
		Engine.run(engine);
  
}


function draw() {
  background(0);
imageMode (CENTER);
image (boy,300,500,200,300);
image (tree,1050,300,500,700);
m1.display();
m2.display();
m3.display();
m4.display();
m5.display();
m6.display();
stone.display();
slingshot.display();
collided(stone,m1);
collided (stone,m2);

}
function collided(s1,mango){
	stoneposition= s1.body.position;
	mangoposition= mango.body.position;
	var d=dist(stoneposition.x, stoneposition.y,mangoposition.x, mangoposition.y)
	console.log (d)
	if(d<= mango.r+ s1.r ){
		Matter.Body.setStatic(mango.body,false)
	 console.log ("stone")
	}
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
  }
  function mouseReleased(){
	slingshot.fly();
  
  }